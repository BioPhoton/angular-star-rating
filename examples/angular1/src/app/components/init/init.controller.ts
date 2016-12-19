import {starRatingColors, starRatingPosition, starRatingStarTypes, starRatingSpeed, starRatingSizes} from "../../../../../dist/star-rating.controller";
import {IStarRatingOnUpdateEvent, IStarRatingOnClickEvent} from "../../../../../../dist/star-rating.controller";

export class InitController {


    //option sets
    colorOptions:Array<starRatingColors|string> = ['default','negative', 'ok', 'positive'];
    labelPositionOptions:Array<starRatingPosition|string> = ['top','right', 'left', 'bottom'];
    starOptions:Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
    speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
    sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];
    spaceOptions:Array<starRatingStarSpace|string> = ['around', 'between', 'no'];

    //component input properties (> bindings)
    id: string;
    //pathEmpty: string;
    //pathFilled:string;
    numOfStars:number = 5;
    rating: number = 3.5;
    text: number = this.rating;
    color:starRatingColors;
    speed:starRatingSpeed|string;
    size: starRatingSizes|string;
    space: boolean = false;
    readOnly: boolean = false;
    disabled: boolean = false;
    showHalfStars:boolean = false;
    //component input functions (> bindings)
    getColor;
    useCustomCetColor:boolean = false;
    getHalfStarVisible;
    useCustomGetHalfStarVisible:boolean = false;

    constructor() {

    }

    //component output (& bindings)
    onClick($event:IStarRatingOnClickEvent): void {
        console.log('single onClick rating: ',$event.rating);
    }

    onUpdate($event:IStarRatingOnUpdateEvent): void {
        console.log('single onUpdate rating: ',$event.rating);
        this.rating = $event.rating;
    }

    updateGetColorBinding() {
        console.log('update Bind ', this.useCustomCetColor, this.getColor);
        if(this.useCustomCetColor) {
            this.getColor = this._getColor;
        }
        else {
            this.getColor = undefined;
        }

        console.log('updated this.getColor ', this.getColor);
    }

    updateGetHalfStarVisibleBinding() {
        if(this.useCustomGetHalfStarVisible) {
            this.getHalfStarVisible = this._getHalfStarVisible;
        }
        else {
            this.getHalfStarVisible = undefined;
        }
    }

    _getColor(rating :number|string, numOfStars:number, staticColor:string):string {
        console.log('single getColor rating: ',rating, 'numOfStars: ', numOfStars, 'fixColor: ', staticColor);
        let colors = ['default', 'negative', 'ok', 'positive'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    _getHalfStarVisible(rating:number):boolean {
        console.log('getHalfStarVisible rating: ',rating, rating%1);
        return (rating<3);
    };

}