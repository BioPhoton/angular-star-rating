import {StarRatingController} from "./star-rating.controller";
import starRatingTpl = require('./star-rating.tpl.html');

export class StarRatingComponent implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public replace: boolean;

    constructor() {
        this.bindings = {
              id: '@'
            , text: '<'
            , color: '<'
            , starType: '<'
            , numOfStars: '<'
            , speed : '<'
            , size: '<'
            , spread: '<'
            , readOnly: '<'
            , disabled: '<'
            , rating: '<'
            , labelPosition: '<'
            , showHalfStars: '<'
            , getColor: '<'
            , getHalfStarVisible: '<'
            , onClick: '&?'
            , onUpdate: '&?'
        };
        this.replace = true;
        this.controller = StarRatingController;
        this.templateUrl = <string>starRatingTpl;
    }

}