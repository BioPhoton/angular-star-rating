'use strict'

global.__base = __dirname + '/../'

const path = require('path')
const util = require('util')

const config = {}
config.libPath = path.join(__base, 'libs', 'angular-star-rating')
config.debugMode = true
config.validPreset = 'angular'
config.ci = {}
config.ci.validState = 'passed'

module.exports = config
