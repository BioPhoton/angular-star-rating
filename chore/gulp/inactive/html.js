/**
 * html.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 */

'use strict';

var gulp = require('gulp'),
    helper = require('../helper');

var config = require('../config');

var defaultConfig = {
    htmlSrc : [config.src+config.appFolder + '**/*.html'],
    htmlCopySrc : [config.buildFolder+config.appFolder + '**/*.html'],
    htmlDest : config.buildFolder+config.appFolder
};

////////////////


/**
 *  Overrides
 *
 * config.html {[see defaultConfig here]}
 *
 **/
var htmlConfig = defaultConfig;

if('html' in config) {
    htmlConfig = helper.arrayConcatExtend(defaultConfig, config.html);
}


//////////////////


gulp.task('html:clean', function(done) {
    helper.log('Clean html files');

    return helper.clean(htmlConfig.htmlCopySrc, done);
});

gulp.task('html:copy', ['html:clean'], function(done) {
    return copy(done);
});

gulp.task('html:lazycopy', function(done) {
    return copy(done);
});

gulp.task('html:watch', function(done) {
    helper.log('Watch html files ', htmlConfig.htmlSrc);
    return gulp.watch(htmlConfig.htmlSrc, ['html:lazycopy']);
});


//////////

function copy(done) {
    helper.log('Copying html files');

    return gulp.src(htmlConfig.htmlSrc)
        .pipe(gulp.dest(htmlConfig.htmlDest), done);

}
