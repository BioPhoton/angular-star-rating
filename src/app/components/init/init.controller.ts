import {
    starRatingColors, starRatingSpeed, starRatingSizes,
    StarRatingController
} from "../../common/star-rating/star-rating.controller";

export class InitController {

    id: string;

    pathEmpty: string;
    pathFilled:string;

    rating: number = 3;

    text: number = this.rating;
    color:starRatingColors|string;
    colorOptions:Array<starRatingColors|string> = ['negative', 'middle', 'positive'];
    numOfStars:number = StarRatingController.DefaultNumOfStars;
    speed:starRatingSpeed|string;
    speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
    size: starRatingSizes|string;
    sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];
    spread: boolean = false;
    readOnly: boolean = false;
    disabled: boolean = false;


    getColor: Function;
    onClick: Function;
    onUpdate: Function;


}

