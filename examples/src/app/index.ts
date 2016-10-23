import bootstrap = require('bootstrap/dist/css/bootstrap.css');
let bootstrap = bootstrap;


import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import {initPage} from "./components/init/index";
import {angularStars} from "./common/star-rating/index";


angular.module('app',
      [
          "ui.router"
          , initPage
          , angularStars
      ]);
