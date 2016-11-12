/**
 * styleguide.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp gulp-load-plugins gulp-concat gulp-autoprefixer gulp-sass sc5-styleguide --save-dev
 * ``
 *
 */

//@TODO use gulp-load-plugins

'use strict';

var path = require('path');

var gulp = require('gulp');
var helper = require(path.join('..','helper'));

var styleguide = require('sc5-styleguide');
var $ = require('gulp-load-plugins')();
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');


var config = require(path.join('..','..','chore.config'));

var sc5Folder = 'sc5-styleguide';
console.log(path.join(config.root,sc5Folder));
var defaultConfig = {
        srcFolder: [path.join(config.src,'**','*.scss')],
        generateScr:[path.join(config.src,'**','*.scss')],
        copies:[],
        applyStylesSrc:[path.join(config.src,'**','_*.scss'), path.join(config.src,'**','*.scss')],
        destFolder: path.join(sc5Folder),
        sassOptions : {
            indentWidth: 4,
            outputStyle: 'expanded',
            errorLogToConsole: true
        },
        autoprefixerOptions: {
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        },
        styleguideOptions : {
            title: config.projectName,
            afterBody:  '<script src="/angular-aria/angular-aria.js">' +
                        '</script><script src="/angular-messages/angular-messages.js"></script>' +
                        '<script src="/angular-material/angular-material.js"></script>',
            server: true,
            rootPath: sc5Folder,
            overviewPath: path.join(config.src,sc5Folder,'README.md'),
            port: 3500

        }
    };

////////////////


/**
 *  Overrides
 *
 * config.sc5Styleguide {[see defaultConfig here]}
 *
 **/
var styleguideConfig = defaultConfig;

if ('sc5Styleguide' in config) {
    styleguideConfig = helper.arrayConcatExtend(defaultConfig, config.sc5Styleguide);
}

//__________________________________________________________________________________________________


////////////////////////


gulp.task('styleguide:init', function () {
    helper.log('This task should autocreate the folder "sc5-styleguide" with styleguide.scss file and the "components" folder including a dummy-component.scss file');
});

gulp.task('styleguide:generate', ['styleguide:copy'], function (done) {
    helper.log('Generate components from ' + styleguideConfig.generateScr);
    return gulp.src(styleguideConfig.generateScr)
        .pipe(styleguide.generate(styleguideConfig.styleguideOptions))
        .pipe(gulp.dest(styleguideConfig.destFolder));

});

gulp.task('styleguide:applystyles', function () {
    helper.log('Apply styles from ' + styleguideConfig.applyStylesSrc);
    return gulp.src(styleguideConfig.applyStylesSrc)
        .pipe($.concat('app.css'))
        .pipe($.sass(styleguideConfig.sassOptions).on('error', $.sass.logError))
        .pipe(autoprefixer(styleguideConfig.autoprefixerOptions))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(styleguideConfig.destFolder));
});

gulp.task('styleguide:build', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('styleguide:watch', ['styleguide:build'], function () {
    helper.log('View the styleguide in your browser under http://localhost:3500/');
    // Start watching changes and update styleguide whenever changes are detected
    // Styleguide automatically detects existing server instance
    gulp.watch([path.join('src','**','*.scss')], ['styleguide:build']);
});

gulp.task('styleguide:copy',  function(done) {
    helper.log('Copying ionic-resources base images');
    if(styleguideConfig.copies.length>0) {
        return helper.bulkCopy(styleguideConfig.copies);
    }
    return done;
});