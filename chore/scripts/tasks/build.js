'use strict'

const config = require('../../config')
const utils = require('../utils')

const fs = require('fs')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

// config
const ngPackagr = require(path.join(__base, 'node_modules/ng-packagr/lib/ng-packagr'))

process.env.DEBUG = config.debugMode

module.exports = build

function build () {
  return Promise.resolve()
    .then(res => {
      return packaging()
    })
    .then((r) => {
      return copyStyles()
    })
    .catch((e) => {
      console.error('BuildProcessError: '.red, e)
    })
}

// build scripts
// =============================================================================

async function packaging () {
  await ngPackagr.ngPackage({project: path.join(config.libPath, 'ng-package.json')})
    .then((res) => {
      console.info('done packaging'.green)
    })
    .catch((err) => {
      console.error('Build failed: '.red, err)
      process.exit(1)
    })
  const {stdout, stderr} = await exec('npm pack', {cwd: path.join(config.libPath, 'dist')})
  console.info('done npm pack'.green)
  return {stdout, stderr}
}

function copyStyles () {
  const source = path.join(config.libPath, 'src', 'styles.scss')
  const target = path.join(config.libPath, 'dist', 'styles.scss')
  return utils.copyFile(source, target, (r) => console.log('copy styles done'))
}
