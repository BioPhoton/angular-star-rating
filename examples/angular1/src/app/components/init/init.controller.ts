import {starRatingColors, starRatingPosition, starRatingStarTypes, starRatingSpeed, starRatingSizes} from "../../../../../dist/star-rating.controller";

export class InitController {

    //option sets
    colorOptions:Array<starRatingColors|string> = ['default','negative', 'middle', 'positive'];
    labelPositionOptions:Array<starRatingPosition|string> = ['top','right', 'left', 'bottom'];
    starOptions:Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
    speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
    sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];

    //component @ properties
    id: string;
    //component > properties
    //pathEmpty: string;
    //pathFilled:string;
    numOfStars:number = 5;
    rating: number = 3;
    text: number = this.rating;
    color:starRatingColors;
    speed:starRatingSpeed|string;
    size: starRatingSizes|string;
    spread: boolean = false;
    readOnly: boolean = false;
    disabled: boolean = false;
    showHalfStars:boolean = false;

    constructor() {
        console.log('constructor');
    }

    //component & properties
    getColor(rating, numOfStars, staticColor):string {
        console.log('getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', staticColor);
        return 'default';
    }

    getHalfStarVisible(rating:number):boolean {
        console.log('getHalfStarVisible rating: ',rating, rating%1);
        return (rating<2);
    }

    onClick(rating:number):number {
        console.log('onClick rating: ',rating);
        return rating;
    }

    onUpdate(rating:number): void {
        console.log('onUpdate rating: ',rating);
        this.rating = rating;
    }

}