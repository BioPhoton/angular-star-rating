var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var base_c = require("./chore/chore.config");

webpackConfig.entry = {};
webpackConfig.output.filename = "[name].js";

// Karma configuration
// Generated on Fri Jan 16 2015 01:40:34 GMT+0200 (EET)
module.exports = function (config) {
    var cfg = {
        basePath: ".",
        frameworks: ["jasmine"],
        port: 3000,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        browsers: ["PhantomJS"],

        customLaunchers: {
            Chrome_Travis_CI: {
                base: 'PhantomJS'
            }
        },

        files: [
              "./dist/index.js"
            //, "./src/index.ts"
            , "./src/index.spec.ts"
        ],


        // Karma plugins loaded
        plugins: [
            "karma-webpack"
            , "karma-jasmine"
            , 'karma-typescript-preprocessor'
            , "karma-coverage"
            , "karma-chrome-launcher"
            , "karma-phantomjs-launcher"
        ],

        // Coverage reporter generates the coverage
        reporters: ["progress", "dots", "coverage"],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
           // "./src/index.ts": ["webpack"]
             "./src/*.spec.ts": ["webpack", "coverage"]
            //"src/**/*!(*.spec*|*.protractor*|*.mock*|*.bundle*).ts": ["webpack", "coverage"]

            //, "./src/star-rating.component.ts": ["webpack", "coverage"]
            //, './src/index.ts':['webpack','coverage']
            , './dist/*.js':['coverage']
        },
        webpack: webpackConfig,

        coverageReporter: {
            reporters: [
                {dir: "coverage/"},
                {type: "text"},
              {
                    type : 'json',
                    subdir : '.',
                    file : 'coverage-final.json'
                }
            ]
        },

        singleRun: true
    };

    if (process.env.TRAVIS) {
        cfg.browsers = ['Chrome_Travis_CI'];
    }

    config.set(cfg);
};