/**
 * env.js
 *
 * This file injects the configuration options index.html
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins yargs gulp-merge-json --save-dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp'),
    helper = require('../helper'),
    merge = require('gulp-merge-json'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')();
//runSequence = require('run-sequence');

var config = require('../config');

var defaultConfig = {
    injectScr :config.buildIndex,
    injectDest : config.buildFolder,
    injectConfigSrc:[],
    evnJsonDest:config.src+config.appFolder
};

////////////////

var envConfig = defaultConfig;

if ('env' in config) {
    envConfig = helper.arrayConcatExtend(defaultConfig, config.env);
}

//__________________________________________________________________________________________________


gulp.task('env:inject', function (done) {
    var env = "local";
    
    helper.log('Wiring the env config dependencies ('+ envConfig.injectConfigSrc  +') for env: ' + env + ' into '+envConfig.injectScr);

    var target = gulp.src(envConfig.injectScr);
    var sources = gulp.src(envConfig.injectConfigSrc);
    return target
        .pipe($.inject(sources, {name: 'inject:config', ignorePath: 'www', addRootSlash: false}))
        .pipe(gulp.dest(envConfig.injectDest), done);

    /*var source = gulp.src(envConfig.configFiles.build);
    var target = gulp.src(envConfig.injectScr);

         return target
         .pipe($.inject(source, {name: 'inject:config', ignorePath: 'www', addRootSlash: false}))
         .pipe(gulp.dest(envConfig.injectTargetFolder), done);
         */
});

gulp.task('env:compile',['env:compile-json'], function(done){
    helper.log('Take '+envConfig.evnJsonDest+envConfig.envJsonFileName+' create build.config.js and save it to ' + envConfig.injectDest+envConfig.envJsFileName);

    var configJsonString = fs.readFileSync(envConfig.evnJsonDest+envConfig.envJsonFileName);
    fs.writeFileSync(envConfig.injectDest+envConfig.envJsFileName, 'var app_config = ' +configJsonString+';' );
    return done();
});


gulp.task('env:compile-json', function (done) {
    var env = helper.getEnv();
    helper.log('create '+envConfig.envJsonFileName+' for environment ' + envConfig.configFiles.default +'  '+envConfig.configFiles[env] +' and save it to ' + envConfig.evnJsonDest);

    return gulp.src([envConfig.configFiles.default,envConfig.configFiles[env]])
        .pipe(merge(envConfig.envJsonFileName))
        .pipe(gulp.dest(envConfig.evnJsonDest), done);
});
