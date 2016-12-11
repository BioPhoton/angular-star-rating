/**
 * fonts.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins --save-dev
 * ``
 *
 *
 * This file contains often used modules and functions created in a generic reusable way.
 *
 */

'use strict';

var gulp = require('gulp'),

  helper = require('../helper'),
  $ = require('gulp-load-plugins')();
//runSequence = require('run-sequence');

var config = require('../config'),
  assetsFolder = (config.assetsFolder)?config.buildFolder+config.buildAssets:config.buildFolder+'assets/',
  fontsFolder = 'fonts',
  indexFile = config.buildFolder + 'index.html';

var defaultConfig = {
  fontsScr :indexFile,
  fontsDest : assetsFolder + fontsFolder,
  fontCopies : []
};

////////////////


/**
 *  Overrides
 *
 * config.fonts {[see defaultConfig here]}
 *
 **/
var fontsConfig = defaultConfig;

if('fonts' in config) {
  fontsConfig = helper.arrayConcatExtend(defaultConfig, config.fonts);
}




//organize font files for project
gulp.task('fonts:clean', function(done) {
  return helper.clean(fontsConfig.fontDest+'**/*.*', done);
});
gulp.task('fonts:copy', ['fonts:clean'], function(done) {
  helper.log('Copying fonts');
  if(fontsConfig.fontCopies.length>0) {
    return helper.bulkCopy(fontsConfig.fontCopies);
  }
  return done;
});