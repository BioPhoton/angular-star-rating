'use strict';

const config = require('../../config');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

// config

process.env.DEBUG = config.debugMode;

module.exports = build;

function build() {
  return Promise.resolve()
    .then(() => packaging())
    .catch((e) => console.error('BuildProcessError: '.red, e));
}

// build scripts
// =============================================================================

async function packaging() {
  await exec('npm run build:lib')
    .then(() => console.info('done packaging'.green))
    .catch((err) => {
      console.error('Build failed: '.red, err);
      process.exit(1);
    });
  const { stdout, stderr } = await exec('npm pack', { cwd: config.libPath });
  console.info('done npm pack'.green);
  return { stdout, stderr };
}
