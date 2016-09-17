/**
 * script.js
 *
 * This file injects every needed file into index.html
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins gulp-inject gulp-angular-filesort gulp-order --save-dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp'),

    helper = require('../helper'),
    $ = require('gulp-load-plugins')();

var config = require('../config');

var defaultConfig = {
        injectScr :config.buildIndex,
        injectDest : config.buildFolder,
        //js
        injectJsSrc: [
            config.buildFolder + 'app/**/*.js',
            '!'+config.buildFolder + 'app/**/*.mock.js',
            '!'+config.buildFolder + 'app/**/*.jasmine.js',
            '!'+config.buildFolder + 'app/**/*.protractor.js'
        ],
        injectJsOrder : []
    };

////////////////


/**
 *  Overrides
 *
 * config.scripts {[see defaultConfig here]}
 *
 **/
var scriptConfig = defaultConfig;

if('scripts' in config) {
    scriptConfig = helper.arrayConcatExtend(defaultConfig, config.scripts);
}

//__________________________________________________________________________________________________

gulp.task('script:inject', function(done) {
  helper.log('Wiring the project dependencies '+scriptConfig.injectJsSrc+' into html');

  var target = gulp.src(scriptConfig.injectScr);
  var sources = gulp.src(scriptConfig.injectJsSrc)
    //fixed order of insert by first sorting with order then do angular order
    //!!NOTICE sometimes this still don't work.
    // If this is the case a quick workaround is to reference the files statically in scr/index.html
    .pipe($.order(scriptConfig.injectJsOrder))
    .pipe($.angularFilesort());

  return target
    .pipe($.inject(sources, {ignorePath: 'www', addRootSlash: false}))
    .pipe(gulp.dest(scriptConfig.injectDest), done);

});
