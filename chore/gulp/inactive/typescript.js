/**
 * typescript.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This file requires following npm modules:
 * ```
 * npm install gulp gulp-load-plugins gulp-typescript gulp-sourcemaps --save-dev
 * ```
 *
 */

'use strict';

var gulp = require('gulp'),
  helper = require('../helper'),
  ts = require('gulp-typescript'),
  $ = require('gulp-load-plugins')();

var config = require('../config.js'),
  path = require('path');


var defaultConfig = {
  srcFiles: ['./src/**/*.ts', './src/**/*.js'],
  buildFolder: (config.buildFolder) ? config.buildFolder : 'dist/',
  options: {
    target: "ES5",
    sourceMap: true,
    allowJs: true
  }
};

//////////////////


var tsConfig = defaultConfig;

/**
 *  Overrides
 *
 *  config.typescript {[see defaultConfig here]}
 *
 **/

if ('typescript' in config) {
  tsConfig = helper.arrayConcatExtend(defaultConfig, config.typescript);
}

//__________________________________________________________________________________________________


//@TODO tslint


gulp.task('ts:watch', function (done) {
  helper.log('Watching all .ts and .js files in ' + tsConfig.srcFiles + ' for changes and recompile typescript');
  return helper.watch(tsConfig.srcFiles, ['ts:recompile'])
    .on('change', function (event) {
      var srcPattern = new RegExp('/.*(?=/' + config.src + ')/');
      helper.log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
    });
});

gulp.task('ts:recompile', function (done) {
  helper.log('compile all ts files pass all js files and copy all to ' + tsConfig.buildFolder);
  return compile(done);
});

gulp.task('ts:compile', ['ts:clean'], function (done) {
  helper.log('compile all ts files pass all js files and copy all to ' + tsConfig.buildFolder);
  return compile(done);
});

gulp.task('ts:clean', function (done) {
  helper.log('delete all compiled ts files');
  var cleanFolders = [
    path.join(tsConfig.buildFolder + 'app/**/*.js')
    , path.join('!' + tsConfig.buildFolder + "build.config.js")
  ];
  return helper.clean(cleanFolders, done);
});

/////////

function compile(done) {
  return gulp.src(tsConfig.srcFiles)
    .pipe($.sourcemaps.init())
    .pipe(ts(tsConfig.options))
    //create inline sourcemaps (at bottom of file )
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(tsConfig.buildFolder), done);
}

