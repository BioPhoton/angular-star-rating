import Bootstrap = require('bootstrap/dist/css/bootstrap.css');
//import StarRatingIcons = require('angular-star-rating/dist/assets/images/star-rating.icons.svg');
let bootstrap = Bootstrap;
//let StarRatingIcons = StarRatingIcons;

import 'angular';
import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import 'angular-star-rating';
//import {angularStars} from "angular-star-rating/dist/index.js";

import {initPage} from "./components/init/index";

angular.module('app',
      [
          "ui.router"
          , initPage
          , 'star-rating'
      ])
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('init');
    });