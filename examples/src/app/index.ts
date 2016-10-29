import Bootstrap = require('bootstrap/dist/css/bootstrap.css');

let bootstrap = Bootstrap;
//let angularStars = AngularStars;

import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import 'angular-star-rating';
import {angularStars} from "angular-star-rating/dist/index.js";

import {initPage} from "./components/init/index";

angular.module('app',
      [
          "ui.router"
          , initPage
          , 'star-rating'
      ]);