'use strict'

const path = require('path')
const {promisify} = require('util');

const exec = promisify(require('child_process').exec);
const config = require(path.join('..', '..', 'config'))

module.exports = ciCheck

// checks the status of the last build of the current repository
// --no-interactive disables the interactive mode
// source: https://github.com/travis-ci/travis.rb/blob/master/README.md
function ciCheck() {
 return exec('travis status --no-interactive', {cwd: config.libPath})
  .then((result) => {
    if (result.stdout === config.ci.validState) {
      return Promise.resolve(result)
    } else {
      const errorMsg = 'Travis status should be ' + config.ci.validState + ' ' + result.stdout + ' given';
      return Promise.reject(errorMsg);
    }
  })
}
