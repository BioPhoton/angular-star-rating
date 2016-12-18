import {starRatingColors, starRatingPosition, starRatingStarTypes, starRatingSpeed, starRatingSizes} from "../../../../../dist/star-rating.controller";
import {IStarRatingOnUpdateEvent, IStarRatingOnClickEvent} from "../../../../../../dist/star-rating.controller";

export class InitController {


    //option sets
    colorOptions:Array<starRatingColors|string> = ['default','negative', 'middle', 'positive'];
    labelPositionOptions:Array<starRatingPosition|string> = ['top','right', 'left', 'bottom'];
    starOptions:Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
    speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
    sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];

    //component input (> bindings)
    id: string;
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
    getColor(rating:number, numOfStars:number, staticColor:string):string{
        console.log('init getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', staticColor);
        return 'default';
    };
    getHalfStarVisible(rating:number):boolean {
        console.log('getHalfStarVisible rating: ',rating, rating%1);
        return (rating<2);
    };

    constructor() {

    }

    //component output (& bindings)
    onClick($event:IStarRatingOnClickEvent): void {
        console.log('init onClick rating: ',$event.rating);
    }

    onUpdate($event:IStarRatingOnUpdateEvent): void {
        console.log('init onUpdate rating: ',$event.rating);
        this.rating = $event.rating;
    }


}