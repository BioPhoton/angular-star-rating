/**
 * typedoc.js
 *
 * This file uses the config.js and helper.js file located in ./chore/gulp
 *
 * This File requires following npm modules:
 * ``
 * $ npm install gulp  gulp-typedoc --save-dev
 * ``
 *
 */

//@TODO use gulp-load-plugins

'use strict';

var path = require('path');

var gulp = require('gulp');
var helper = require(path.join('..', 'helper'));

var typedoc = require("gulp-typedoc");

var config = require(path.join('..', '..', 'chore.config'));

var defaultConfig = {
    src: ["src/**/*.ts"]
    , typedocOptions: {
        module: "commonjs",
        target: "es5",
        out: "docs/",
        name: "My project title"
    }
};

////////////////


/**
 *  Overrides
 *
 * config.sc5Styleguide {[see defaultConfig here]}
 *
 **/
var typedocConfig = defaultConfig;

if ('typodoc' in config) {
    typedocConfig = helper.arrayConcatExtend(defaultConfig, config.typedoc);
}

//__________________________________________________________________________________________________


////////////////////////


gulp.task('typedoc:compile', function (done) {

        return gulp
            .src(typedocConfig.src)
            .pipe(typedoc(typedocConfig.typedocOptions));

});