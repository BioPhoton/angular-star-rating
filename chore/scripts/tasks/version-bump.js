'use strict';

const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

const utils = require(path.join('..', 'utils'));
const config = require(path.join('..', '..', 'config'));

// create version bump
let detectedBump;
let detectedVersion;

module.exports = versionBump;

function versionBump() {
  console.info('start versionBump'.gray);
  return (
    utils
      .getBump()
      .then((bump) => {
        detectedBump = bump;
        console.info('detected bump type: ' + detectedBump.gray);
        return Promise.resolve();
      })
      // npm version [detectedBump] bumps the version specified in detectedBump
      // and write the new data back to package.json
      .then(() =>
        exec('npm --no-git-tag-version version ' + detectedBump, {
          cwd: config.libPath,
        })
      )
      .then(() =>
        exec('git add .\\package.json', { cwd: config.packagedFolder })
      )
      .then(() => utils.getPackageVersion())
      .then((version) => {
        detectedVersion = version;
        console.info('detected version: ' + detectedVersion.green);
        return Promise.resolve();
      })
      .then(() =>
        exec(
          'git commit -m "chore(release): ' +
            detectedVersion +
            ' (' +
            detectedBump +
            ')"',
          { cwd: __base }
        )
      )
      .then(() => exec('git tag ' + detectedVersion), { cwd: __base })
      // push the commit
      // --follow-tags also pushes the new tags
      // source: https://git-scm.com/docs/git-push
      .then(() => {
        console.info('start git push --follow-tags'.gray);
        return exec('git push --follow-tags', { cwd: __base }).then(() => {
          console.info('pushed repo and created tag'.green);
        });
      })
  );
}
