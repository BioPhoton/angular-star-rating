'use strict'

const path = require('path')
const {promisify} = require('util');

const exec = promisify(require('child_process').exec);

const config = require(path.join('..', '..', 'config'))
const utils = require(path.join(__base, 'chore', 'scripts', 'utils'))

module.exports = refresh

function refresh (hard) {
  if(hard === true) {
    utils.deleteFile(path.join(__base, 'node_modules'))
  }

  return Promise.resolve()
    // pulls the latest version and rebases
    .then(() => {
      console.info('start git pull --rebase'.gray)
      return exec('git pull --rebase', {cwd: __base})
    })
    // installs the node dependencies
    .then(() => {
      console.info('done git pull --rebase'.green)
      console.info('start npm install'.gray)
      return exec('npm install', {cwd: __base})
    })
    .then(() => {
      console.info('end npm install'.green)
    })
}
