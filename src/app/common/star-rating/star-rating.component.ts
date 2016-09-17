import {StarRatingController} from "./star-rating.controller";
import templateUrl = require('./star-rating.tpl.html');

export class StarRatingComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public replace: boolean;

    constructor() {
        this.bindings = {
            id: '@'
            //, iconType: '@?'
            //, pathEmpty: '<'
            //, pathFilled: '<'
            , text: '<'
            , color: '<'
            , numOfStars: '<'
            , speed : '<'
            , size: '<'
            , spread: '<'
            , readOnly: '<'
            , disabled: '<'
            , rating: '<'
            , position: '<'
            , getColor: '&?'
            , onClick: '&?'
            , onUpdate: '&?'
        };
        this.replace = true;
        this.controller = StarRatingController;
        this.templateUrl = templateUrl;
    }

}

