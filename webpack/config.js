/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 */
'use strict';

module.exports = (function () {

    var ENV_LOCAL = "local",
        ENV_STAGING = "staging",
        ENV_PRODUCTION = "production",
        ENV_TESTING = "testing";

    var validEnvs = [ENV_LOCAL, ENV_STAGING, ENV_PRODUCTION, ENV_TESTING];

    //dir paths
    var root = './',
        src = 'src',
        dist = 'www',

        entryFile = 'app.js',
        indexFile = 'index.html',
        app = 'app',
        assets = 'assets';

    var config = {
        root: root,
        src: src,
        dist: dist,

        app: app,
        assets: assets,

        entryFile: entryFile,
        indexFile: indexFile
    };

    return config;

})();
