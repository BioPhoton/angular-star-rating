'use strict'

const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const utils = require(path.join('..', 'utils'))

module.exports = releaseGithub

function releaseGithub () {
// release on git and npm

// Make a new GitHub release from git metadata based on your commit-convention. In this case angular convention
// source: https://github.com/conventional-changelog/conventional-github-releaser/blob/master/README.md
  console.info('start github release'.gray)
  return utils.getPreset()
    .then((preset) => {
      return new Promise((resolve, reject) => {
        exec('conventional-github-releaser -p ' + preset, (err, responses) => {
          if(err !== undefined) {
            console.log('error in github release'.red, err);
            reject(err)
          } else {
            console.log('released on github'.green);
            resolve(responses)
          }
        })
      })
    })
}
