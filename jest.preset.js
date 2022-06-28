const nxPreset = require('@nrwl/jest/preset');
module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'mjs'],
  coverageReporters: ['html', 'json', 'lcov'],
  verbose: true,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!.*.mjs$)',
  ],
};
