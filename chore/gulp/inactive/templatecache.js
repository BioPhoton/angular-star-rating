/**
 * templatecache.js
 *
 * This file is angular specific.
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins gulp-htmlmin gulp-uglify gulp-angular-templatecache --save-dev
 * ``
 *
 */


'use strict';

var gulp = require('gulp'),
    helper = require('../helper'),
    $ = require('gulp-load-plugins')();

var config = require('../config'),
    templateCacheRoot =   (config.appFolder)?config.appFolder:"app/",
    templateFileName = config.templateFileName || 'templates.js';

var defaultConfig = {

    injectScr :config.buildIndex,
    injectTemplateSrc : templateFileName,
    injectDest : config.buildFolder,
    templateSrc : [],
    templateDest : '',
    srcOptions : {ignorePath: 'www', addRootSlash: false},
    file : templateFileName,
    htmlminOptions : {
        empty: true,                      // KEEP empty attributes
        //cdata: true,                      // KEEP CDATA from scripts
        comments: false,                   // KEEP comments
        //ssi: true,                        // KEEP Server Side Includes
        conditionals: false,               // KEEP conditional internet explorer comments
        spare: true,                      // KEEP redundant attributes
        quotes: true                     // KEEP arbitrary quotes
        //loose: true,                      // KEEP one whitespace
        //dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
        //    xmlMode: false,                     // Disables the special behavior for script/style tags (false by default)
        //    lowerCaseAttributeNames: true,      // call .toLowerCase for each attribute name (true if xmlMode is `false`)
        //    lowerCaseTags: true                 // call .toLowerCase for each tag name (true if xmlMode is `false`)
        //}
    },

    templateCacheOptions : {
        root : templateCacheRoot,
        module : "commons.caching.templates",
        standalone : false
        //base : './app/',
        //moduleSystem : "Wrap the templateCache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).",
        //transformUrl : "Transform the generated URL before it's put into $templateCache.",
        //templateHeader : "Override template header.",
        //templateBody :  "Override template body.",
        //templateFooter : "Override template footer."
    },
    uglifyOptions : {}
};

//////////////////

var  templateCacheConfig = defaultConfig;

/**
 *  Overrides
 *
 *  config.templateCache {[see defaultConfig here]}
 *
 **/
if('templatecache' in config) {
    templateCacheConfig = helper.arrayConcatExtend(defaultConfig, config.templatecache);
}

//__________________________________________________________________________________________________

gulp.task('templatecache:recompile', function (done) {
    return compile(done);
});

gulp.task('templatecache:compile',['templatecache:clean'], function (done) {
   return compile(done);
});

gulp.task('templatecache:inject', function(done) {

    var target = gulp.src(templateCacheConfig.injectScr);
    var sources = gulp.src(templateCacheConfig.templateDest+'*.js', {read: false});
    helper.log('Wiring the template dependencies '+templateCacheConfig.injectScr+ ' - '+ templateCacheConfig.templateDest+'*.js');

    return target
      .pipe($.inject(sources, {ignorePath: 'www', addRootSlash: false, name:'inject:templates'}))
      .pipe(gulp.dest(templateCacheConfig.injectDest), done);
});

gulp.task('templatecache:clean', function(done) {
    helper.log('Cleaning all files from '+templateCacheConfig.templateDest);
    return helper.clean(templateCacheConfig.templateDest+'**/*.*', done);
});


gulp.task('templatecache:watch', function(done) {
    return gulp.watch(templateCacheConfig.templateSrc, ['templatecache:recompile']);
});


function compile(done){
    helper.log('Collecting html files from '+templateCacheConfig.templateSrc+' minify, uglify and put in '+templateCacheConfig.templateDest+' file');
    return gulp
        .src(templateCacheConfig.templateSrc)
        //.pipe($.if(verbose, $.bytediff.start()))
        .pipe($.htmlmin(templateCacheConfig.htmlminOptions))
        //.pipe($.if(verbose, $.bytediff.stop(helper.bytediffFormatter)))
        .pipe($.angularTemplatecache(templateCacheConfig.file, templateCacheConfig.templateCacheOptions))
        .pipe($.uglify(templateCacheConfig.uglifyOptions))
        .pipe(gulp.dest(templateCacheConfig.templateDest), done);
}
