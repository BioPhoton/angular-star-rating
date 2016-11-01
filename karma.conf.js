var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var base_config = require('./chore/chore.config');

webpackConfig.entry = {};

module.exports = function (config) {
    var pathToIndexJs =  './'+path.join(base_config.dist,webpackConfig.output.filename);

    config.set({

        basePath: '.',

        frameworks: ['jasmine'],


        files: [
            './node_modules/angular/angular.js',
            pathToIndexJs
        ],

        // proxied base paths
        //proxies: {
        //    './src/app/common/star-rating/*.ts': ["webpack"]
        //},

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            './dist/index.js': ['coverage']
        },

        webpack: {
            //devtool: "inline-source-map",
            resolve: {
                extensions: ["", ".ts", ".js"]
            },
            module: {
                loaders: [
                    {test: /\.ts$/, loader: "ts-loader"},
                    {test: /\.html$/, loader: "raw"},
                    {test: /\.(jpg|png|woff|woff2|eot|ttf|svg|scss)$/, loader: "null"}
                ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        coverageReporter: {
            reporters: [
                {dir: 'coverage/'},
                {type: 'text'}
            ]
        },

        singleRun: true
    })
};