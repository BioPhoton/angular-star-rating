/**
 * images.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 */

'use strict';

var gulp = require('gulp'),

  helper = require('../helper'),
  $ = require('gulp-load-plugins')();
//runSequence = require('run-sequence');

var config = require('../config');

var defaultConfig = {
  imageCopies : []
};

////////////////


/**
 *  Overrides
 *
 * config.images {[see defaultConfig here]}
 *
 **/
var imagesConfig = defaultConfig;

if('images' in config) {
  imagesConfig = helper.arrayConcatExtend(defaultConfig, config.images);
}



//organize image files for project
gulp.task('images:clean', function(done) {
  return helper.clean(imagesConfig.imageDest+'/**/*.*', done);
});
gulp.task('images:copy',  function(done) {
  helper.log('Copying images');


  if(imagesConfig.imageCopies.length>0) {
    return helper.bulkCopy(imagesConfig.imageCopies);
  }
  return done;
});
