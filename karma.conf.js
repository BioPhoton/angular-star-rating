var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var base_config = require("./chore/chore.config");

webpackConfig.entry = {};


// Karma configuration
// Generated on Fri Jan 16 2015 01:40:34 GMT+0200 (EET)
module.exports = function (config) {
    var cfg = {
        basePath: ".",
        frameworks: ["jasmine"],
        port: 9876,
        logLevel: config.LOG_INFO,
        colors: true,
        autoWatch: true,
        browsers: ["PhantomJS"],

        /*customLaunchers: {
            Chrome_Travis_CI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },*/

        files: [
            "./node_modules/angular/angular.js"
            , "./node_modules/angular-mocks/angular-mocks.js"
            , "./dist/index.js"
            , "./src/star-rating.controller.jasmine.ts"
        ],


        // Karma plugins loaded
        plugins: [
            "karma-webpack"
            , "karma-jasmine"
            , "karma-coverage"
            , "karma-chrome-launcher"
        ],

        // Coverage reporter generates the coverage
        reporters: ["progress", "dots", "coverage"],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            "src/*!(*.jasmine*|*.protractor|*.mock|*.bundle).ts": ["webpack", "coverage"]
            //, "src/**/*.ts": ["webpack"]
            //, "src/*!(*.jasmine*|*.protractor*|*.mock*|*.bundle*).ts": ["webpack", "coverage"]
            //, "./src/star-rating.controller.ts": ["webpack", "coverage"]
            //, "./src/star-rating.component.ts": ["webpack", "coverage"]
            , "./dist/*.js*": ["coverage"]
        },

        webpack: webpackConfig,

        coverageReporter: {
            reporters: [
                {dir: "coverage/"},
                {type: "lcov"}
            ]
        },

        singleRun: true
    };

    if (process.env.TRAVIS) {
        //cfg.browsers = ['Chrome_Travis_CI'];
    }

    config.set(cfg);
};