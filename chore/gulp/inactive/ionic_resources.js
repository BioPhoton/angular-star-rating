/**
 * ionic_resources.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 */

'use strict';

var gulp = require('gulp'),

  helper = require('../helper'),
  $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
  ionicResourcesCopies : []
};

////////////////


/**
 *  Overrides
 *
 * config.ionic_resources {[see defaultConfig here]}
 *
 **/
var ionicResourcesConfig = defaultConfig;

if('ionicResources' in config) {
  ionicResourcesConfig = helper.arrayConcatExtend(defaultConfig, config.ionicResources);
}



//organize image files for project
gulp.task('ionic-resources:clean', function(done) {
  return helper.clean(ionicResourcesConfig.ionicResourcesDest+'/**/*.*', done);
});
gulp.task('ionic-resources:copy',  function(done) {
  helper.log('Copying ionic-resources base images');
  if(ionicResourcesConfig.ionicResourcesCopies.length>0) {
    return helper.bulkCopy(ionicResourcesConfig.ionicResourcesCopies);
  }
  return done;
});
