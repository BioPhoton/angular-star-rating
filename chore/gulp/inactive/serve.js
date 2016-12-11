/**
 * serve.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp yargs browser-sync --save-dev
 * ``
 *
 */

'use strict';
var config = require('../config');

var gulp = require('gulp');
var args = require('yargs').argv;
var helper = require('../helper');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();


var port = config.defaultPort;


///////////////

/**
 * serve the dev environment
 * --debug-brk or --debug
 * --nosync
 */
gulp.task('serve', function () {
    startBrowserSync();
});


//////////////////////


/**
 * Start BrowserSync
 * --nosync will avoid browserSync
 */
function startBrowserSync() {
    if (args.nosync || browserSync.active) {
        return;
    }

    helper.log('Starting BrowserSync on port ' + port);

    var serverRoot = config.baseDirs;

    gulp.watch([].concat(config.src), ['watch-all']);


    var options = {
        //proxy: 'localhost:' + port,
        port: 8010,
        ws: true,
        server: {
            baseDir: serverRoot
        },
        reloadDelay: config.browserReloadDelay
    };

    browserSync.init(options);

}
