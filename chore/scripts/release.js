'use strict'

const path = require('path')

const config = require('../config')
const base = path.join(__base, 'chore', 'scripts', 'tasks')

const ciCheck = require(path.join(base, 'ci-check'))
const refresh = require(path.join(base, 'refresh'))
const build = require(path.join(base, 'build'))
const changelog = require(path.join(base, 'changelog'))
const versionBump = require(path.join(base, 'version-bump'))
const releaseGithub = require(path.join(base, 'release-github'))
const releaseNpm = require(path.join(base, 'release-npm'))
/**/
process.env.DEBUG = config.debugMode

console.info('Start release'.gray)
return Promise.resolve()
  //.then(() => ciCheck())
  // .then(() => refresh())
  //.then(() => build())
  //.then(() => changelog())
  .then(() => versionBump())
  //.then(() => releaseGithub())
  //.then(() => releaseNpm())
  .catch((err) => console.info('release error'.red, err.red))
