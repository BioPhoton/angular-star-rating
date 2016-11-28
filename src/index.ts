import "angular";

import {StarRatingController} from "./star-rating.controller";
import {StarRatingComponent} from "./star-rating.component";

import styles = require('css-star-rating/dist/scss/star-rating.scss');
import icons = require('css-star-rating/dist/images/star-rating.icons.svg');
let styles = styles;
let icons = icons;

export const angularStars = angular
    .module('star-rating', [])
    .controller('starRatingCtrl', StarRatingController)
    .component('starRatingComp', new StarRatingComponent())
    .name;