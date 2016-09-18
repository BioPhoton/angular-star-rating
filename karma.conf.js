var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      './app/bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/**/*.js'],

    // proxied base paths
    proxies: {
      // required for component assets fetched by Angular's. compiler
      //'/src/': '/base/src/'
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
        './app/bundle.js': ['webpack', 'coverage'],
      },

      webpack: webpackConfig,

      webpackMiddleware: {
        noInfo: true
      },

    coverageReporter: {
      reporters:[
        {dir : 'coverage/'},
        {type:'text'}
      ]
    },

    singleRun: true
  })
};
