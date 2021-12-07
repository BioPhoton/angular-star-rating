'use strict';

global.__base = __dirname + '/../';

const path = require('path');

const config = {};
config.libPath = path.join(__base, 'libs', 'angular-star-rating');
config.packagedFolder = path.join(__base, '@packaged', 'angular-star-rating');
config.debugMode = true;
config.validPreset = 'angular';
config.ci = {};
config.ci.validState = 'passed\r\n';

module.exports = config;
