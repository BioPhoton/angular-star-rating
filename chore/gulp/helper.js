/**
 * helper.js
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-load-plugins gulp-utils del gulp-notify extendify merge-stream --save-dev
 * ``
 *
 */

'use strict';

module.exports = (function() {
    var gulp = require('gulp');
    var del = require('del');
    var fs = require('fs');
    var notify = require('gulp-notify');
    var extendify = require('extendify');
    var merge = require('merge-stream');
    var $ = require('gulp-load-plugins')();

  //////////


    var arrayMergeExtend = extendify({
        inPlace: false,
        isDeep: true
    }),
    arrayReplaceExtend = extendify({
        inPlace: false,
        isDeep: true,
        arrays : 'replace'
    }),
    arrayConcatExtend = extendify({
        inPlace: false,
        isDeep: true,
        arrays : 'concat'
    });

    var helper = {
      arrayMergeExtend: arrayMergeExtend,
      arrayReplaceExtend: arrayReplaceExtend,
      arrayConcatExtend: arrayConcatExtend,
      getEnv: getEnv,
      getEnvConfigJson: getEnvConfigJson,
      log: log,
      bulkCopy: bulkCopy,
      clean: clean,
      errorHandler: errorhandler,
      bytediffFormatter: bytediffFormatter,
      watch: watch
    };

  return helper;

  ///////////////////



    function getEnv(){
       return process.env.NODE_ENV || "local";
    }


    function getEnvConfigJson(filepath) {
        return JSON.parse(fs.readFileSync(filepath));
    }

    /**
     * Log a message or series of messages using chalk's green color.
     * Can pass in a string, object or array.
     */
    function log(msg, color) {
        if (typeof(msg) === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    if(color && color in $.util.colors) {
                        $.util.log($.util.colors[color](msg[item]));
                    }
                    $.util.log($.util.colors.lightgreen(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.green(msg));
        }
    }


    /**/
    function bulkCopy(copyArray, done) {
        log('Performing bulk copy: ' + $.util.colors.green(copyArray.length) + ' tasks');
        var merged = merge();

        console.log('copyArray: ', copyArray);
        if(copyArray.length == 0) {
            log('Nothing to copy');
            return merged;
        }

        for(var i = 0; i<=copyArray.length-1; i++) {
            log('copy '+ (('name' in copyArray[i])?copyArray[i].name:'') +' files from '+ copyArray[i].src +' to '+ copyArray[i].dest);
            var move = gulp.src(copyArray[i].src)
                .pipe(gulp.dest(copyArray[i].dest));

            merged.add(move);
        }

        return merged;
    }


    /**
     * Delete all files in a given path
     * @param  {Array}    path - array of paths to delete
     * @param  {Function} done - callback when complete
     */
    function clean(path, done) {
        log('Cleaning: ' + $.util.colors.green(path));
        return del(path, done);
    }



    function watch(src, tasks) {
        log('watch: ' + $.util.colors.green(src));
        return gulp.watch(src, tasks);
    }


   function errorhandler(title) {

        return notify.onError({
            title: title + ' error(s)',
            message: '<%= error.message %>'
        });
    }


    /**
     * Formatter for bytediff to display the size changes after processing
     * @param  {Object} data - byte data
     * @return {String} Difference in bytes, formatted
     */
   function bytediffFormatter(data) {
        var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
        return data.fileName + ' went from '
            + (data.startSize / 1000).toFixed(2) + ' kB to '
            + (data.endSize / 1000).toFixed(2) + ' kB and is '
            + formatPercent(1 - data.percent, 2) + '%' + difference;
    }

    /**
     * Format a number as a percentage
     * @param  {Number} num       Number to format as a percent
     * @param  {Number} precision Precision of the decimal
     * @return {String} Formatted perentage
     */
    function formatPercent(num, precision) {
        return (num * 100).toFixed(precision);
    }

})();
