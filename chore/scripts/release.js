'use strict';

const path = require('path');

const config = require('../config');
const base = path.join(__base, 'chore', 'scripts', 'tasks');

const ngciCheck = require(path.join(base, 'ci-check'));
const refresh = require(path.join(base, 'refresh'));
const build = require(path.join(base, 'build'));
const changelog = require(path.join(base, 'changelog'));
const versionBump = require(path.join(base, 'version-bump'));
const releaseGithub = require(path.join(base, 'release-github'));
const releaseNpm = require(path.join(base, 'release-npm'));
/**/
process.env.DEBUG = config.debugMode;

console.info('Start release'.gray);
return (
  Promise.resolve()
    // check status of travis build
    .then(() => ciCheck())
    // rebase project with git version
    .then(() => refresh())
    // build lib
    .then(() => build())
    // create changelog based onn new version
    .then(() => changelog())
    // bump version and tag it
    .then(() => versionBump())
    // release on github
    // .then(() => releaseGithub())
    // release on npm
    // .then(() => releaseNpm())
    // if any of the above fails catch error and log it
    .catch((err) => console.info('release error'.red, err.red))
);
