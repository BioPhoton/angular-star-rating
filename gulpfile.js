/**
 * gulpfile.js
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins wrench gulp-task-listing  --save-dev
 * ``
 * 
 *  The gulp tasks are separated into several files in the chore/gulp/tasks directory
 *
 *  When starting gulp this file will load all files located in ./gulp/tasks.
 *  To use the files located in inactive just drag them into the tasks folder and install their required modules
 *
 */

'use strict';

var gulp = require('gulp');

var wrench = require('wrench');
var $ = require('gulp-load-plugins')();

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./chore/gulp/tasks').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./chore/gulp/tasks/' + file);
});

/**
 * List the available gulp tasks
 */
gulp.task('help', $.taskListing);
gulp.task('default', ['help']);