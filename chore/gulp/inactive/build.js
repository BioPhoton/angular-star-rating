/**
 * build.js
 *
 * This file uses the config.js and helper.js file located in ./gulp
 *
 * This File requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins gulp-filter gulp-rev gulp-run-sequence gulp-rev-replace gulp-useref gulp-uglify gulp-plumber --save-dev
 * ``
 *
 */

'use strict';

var gulp = require('gulp');
var helper = require('../helper');
var runSequence = require('gulp-run-sequence');
var $ = require('gulp-load-plugins')();

var config = require('../config'),
  optimizedFiles = {
    app_css: 'app.bundle.css',
    lib_css: 'lib.bundle.css',
    app_js: 'app.bundle.js',
    lib_js: 'lib.bundle.js'
  };

var defaultConfig = {
  buildFolder: config.buildFolder,
  srcFolder: config.src,
  staticBuildCopies: [],
  useref: {searchPath: config.baseDirs},
  injectScr: config.buildIndex,
  optimized: optimizedFiles,
  htmlminOptions: {
    empty: true,                      // KEEP empty attributes
    //cdata: true,                      // KEEP CDATA from scripts
    comments: false,                   // KEEP comments
    //ssi: true,                        // KEEP Server Side Includes
    conditionals: false,               // KEEP conditional internet explorer comments
    //spare: true,                      // KEEP redundant attributes
    quotes: false                     // KEEP arbitrary quotes
    //loose: true,                      // KEEP one whitespace
    //dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
    //    xmlMode: false,                     // Disables the special behavior for script/style tags (false by default)
    //    lowerCaseAttributeNames: true,      // call .toLowerCase for each attribute name (true if xmlMode is `false`)
    //    lowerCaseTags: true                 // call .toLowerCase for each tag name (true if xmlMode is `false`)
    //}
  },
  ngAnnotateOptions: {
    //remove: true,
    add: true,
    single_quotes: true
  }
};

////////////////


/**
 *  Overrides
 *
 * config.build {[see defaultConfig here]}
 *
 **/
var buildConfig = defaultConfig;

if ('build' in config) {
  buildConfig = helper.arrayConcatExtend(defaultConfig, config.build);
}

//__________________________________________________________________________________________________


////////////////////////

/**
 * Remove
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-build', function (done) {
  var assetsCss = buildConfig.buildFolder + 'assest/css/';
  var assetsJs = buildConfig.buildFolder + 'assest/js/';
  return helper.clean([assetsCss + 'app.build.css', assetsCss + 'lib.build.css', assetsJs + 'app.build.js', assetsJs + 'lib.build.js'], done);
});

/**
 * Optimize all files, move to a build folder,
 * and inject them into the new index.html
 * @return {Stream}
 */
gulp.task('build:compile'/*,['clean-build']*/, function (done) {
// Filters are named for the gulp-useref path
  var cssFilter     = $.filter('**/*.css', {restore: true}),
    cssAppFilter    = $.filter('**/' + optimizedFiles.app_css, {restore: true}),
    cssLibFilter    = $.filter('**/' + optimizedFiles.lib_css, {restore: true}),
    jsAppFilter     = $.filter('**/' + optimizedFiles.app_js, {restore: true}),
    jsLibFilter     = $.filter('**/' + optimizedFiles.lib_js, {restore: true}),
    notIndexFilter  = $.filter(['**/*', '!' + buildConfig.injectScr], {restore: true});

  return gulp
    .src(buildConfig.injectScr)
    .pipe($.plumber())

    // Apply the concat and file replacement with useref
    .pipe($.useref(buildConfig.useref))

    // Get the app css
    .pipe(cssAppFilter)
    .pipe($.cssnano())
    .pipe(cssAppFilter.restore)

    // Get the app css
    .pipe(cssLibFilter)
    .pipe($.cssnano())
    .pipe(cssLibFilter.restore)

    // Get the custom javascript
    .pipe(jsAppFilter)
    .pipe($.ngAnnotate(buildConfig.ngAnnotateOptions))
    //.pipe($.uglify())
    .pipe(jsAppFilter.restore)

    // Get the vendor javascript
    .pipe(jsLibFilter)
    .pipe($.uglify())
    .pipe(jsLibFilter.restore)

    /*
    //add hashes to filenames
    //Take inventory of the file names for future rev numbers
    .pipe(notIndexFilter)
    .pipe($.rev())
    .pipe(notIndexFilter.restore)
    */

    // Replace the file names in the html with rev numbers
    //.pipe($.revReplace())

    .pipe(gulp.dest(buildConfig.buildFolder), done);

});

gulp.task('build:optimize', function (done) {
  return gulp.src(buildConfig.buildFolder + 'index.html')
    .pipe($.htmlmin(buildConfig.htmlminOptions))
    .pipe(gulp.dest(buildConfig.buildFolder), done);

});
