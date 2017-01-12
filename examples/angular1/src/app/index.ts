import Bootstrap = require('bootstrap/dist/css/bootstrap.css');
//import StarRatingIcons = require('angular-star-rating/dist/assets/images/star-rating.icons.svg');
let bootstrap = Bootstrap;
//let StarRatingIcons = StarRatingIcons;

import 'angular';
import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import 'angular-star-rating';
import svg from "angular-star-rating/dist/assets/images/star-rating.icons.svg";

let svg = svg;

import {initPage} from "./components/init/index";
import {singlePage} from "./components/single/index";

angular.module('app',
      [
            "star-rating"
          , "ui.router"
          , initPage
          , singlePage
      ])
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('single');
    });