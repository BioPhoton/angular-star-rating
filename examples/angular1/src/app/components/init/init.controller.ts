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
    showHalfStars:boolean = false;

    constructor() {
        console.log('constructor');
        this.getHalfStarClass(2);
    }

    getColor(rating, numOfStars, fixColor):string {
        console.log('getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', fixColor);
        return 'default';
    }

    getHalfStarClass(rating:number):boolean {
        console.log('getHalfStarClass rating: ',rating, rating%1);
        return (rating%1 >= 0.5);
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