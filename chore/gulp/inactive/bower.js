/**
 * bower.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp wiredep --save-dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp'),

    helper = require('../helper'),
    wiredep = require('wiredep').stream;

var config = require('../config');

var defaultConfig = {
        injectScr :config.buildIndex,
        injectDest : config.buildFolder,
        //bower
        wiredepOptions : {
            bowerJson:  require('../../bower.json'),
            directory:  './bower_components/',
            //ignorePath: '',
            exclude: [
                'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                'bower_components/jquery/dist/jquery.js'
            ]
        }
    };

////////////////


/**
 *  Overrides
 *
 *  config.bower = {
 *      json: require('../bower.json'),
 *      directory: './lib/',
 *      ignorePath: '../../'
 *  }
 *
 * config.inject {[see defaultConfig here]}
 *
 **/
var scriptConfig = defaultConfig;

if('inject' in config) {
    scriptConfig = helper.arrayConcatExtend(defaultConfig, config.inject);
}
//override bower settings
if('bower' in config) {
    if('json' in config.bower) {scriptConfig.wiredepOptions.bowerJson = config.bower.json}
    if('directory' in config.bower) {scriptConfig.wiredepOptions.directory = config.bower.directory}
    if('ignorePath' in config.bower) {scriptConfig.wiredepOptions.ignorePath = config.bower.ignorePath}
}



//__________________________________________________________________________________________________

gulp.task('bower:inject', function(done) {
    helper.log('Wiring bower dependencies into the bower inject section in '+config.buildIndex);
    return gulp
        .src(scriptConfig.injectScr)
        .pipe(wiredep(scriptConfig.wiredepOptions))
        .pipe(gulp.dest(scriptConfig.injectDest), done);
});
