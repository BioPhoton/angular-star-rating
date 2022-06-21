// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const {
  makeSureNoAppIsSelected,
} = require('@nrwl/schematics/src/utils/cli-config-utils');
// Nx only supports running unit tests for all apps and libs.
makeSureNoAppIsSelected();

const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/apps/demos'),
      subdir: '.',
      reporters: [
        {
          type: 'html',
        },
        {
          type: 'lcovonly',
        },
        {
          type: 'text-summary',
        },
        {
          type: 'json',
        },
      ],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
  };
};
