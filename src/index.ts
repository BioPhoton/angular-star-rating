import "angular";

import {StarRatingController} from "./star-rating.controller";
import {StarRatingComponent} from "./star-rating.component";

import styles = require('./scss/star-rating.sc5.scss');
import icons = require('./star-rating.icons.svg');
let styles = styles;
let icons = icons;

export const angularStars = angular
    .module('star-rating', [])
    .controller('starRatingCtrl', StarRatingController)
    .component('starRating', new StarRatingComponent())
    .name;