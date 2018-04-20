'use strict'

const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const config = require(path.join('..','..', 'config'))
const utils = require(path.join('..', 'utils'))

module.exports = releaseNpm

function releaseNpm () {

// release on git and npm

// Make a new GitHub release from git metadata based on your commit-convention. In this case angular convention
// source: https://github.com/conventional-changelog/conventional-github-releaser/blob/master/README.md
  console.info('start npm release'.gray)
  return utils.getPreset()
    .then((preset) => {

      return exec('npm publish', {cwd: config.packagedFolder})
        .then(() => {
          console.info('published on npm'.green)
        })
    })
}
