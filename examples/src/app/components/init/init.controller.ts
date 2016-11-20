import {starRatingColors, starRatingPosition, starRatingStarTypes, starRatingSpeed, starRatingSizes} from "../../../../../dist/star-rating.controller";

export class InitController {

    id: string;
    pathEmpty: string;
    pathFilled:string;
    rating: number = 3;
    text: number = this.rating;
    color:starRatingColors;
    colorOptions:Array<starRatingColors|string> = ['default','negative', 'middle', 'positive'];
    labelPositionOptions:Array<starRatingPosition|string> = ['top','right', 'left', 'bottom'];
    numOfStars:number = 5;
    starOptions:Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
    speed:starRatingSpeed|string;
    speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
    size: starRatingSizes|string;
    sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];
    spread: boolean = false;
    readOnly: boolean = false;
    disabled: boolean = false;

    getColor(rating, numOfStars, fixColor) {
        console.log('getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', fixColor);
        return 'disbled';
    }

    onClick(rating) {
        console.log('onClick: rating: ',rating);
        return 'disbled';
    }

    onUpdate(rating) {
        console.log('onUpdate rating: ',rating);
        this.rating = rating;
    }

}