import {StarRatingComponent} from "./star-rating.component"
import styles = require('./star-rating.sc5.scss');
import icons = require('./icons.svg');

let styles = styles;
let icons = icons;

export const angularStars = angular
    .module('star-rating', [])
    .component('starRating', new StarRatingComponent())
    .name;


