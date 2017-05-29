import {Component, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import {
    starRatingSizes,
    starRatingSpeed,
    starRatingColor,
    starRatingPosition,
    starRatingStarSpace,
    starRatingStarTypes,
    starRatingDirection
} from "./star-rating-struct";
import {StarRatingConfig} from "./star-rating-config";
import {StarRatingUtils} from "./star-rating.utils";

export class StarRating {

    protected config:any;

    //Inputs
    ///////////////////////////////////////////////////////////////////////////////////////////

    /**
     * id property to identify the DOM element
     */
    protected _id: string;
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value || '';
    }

    /////////////////////////////////////////////

    /**
     * focus
     */
    protected _focus: boolean;
    get focus(): boolean {
        return this._focus;
    }

    set focus(value: boolean) {
        this._focus = !!value;
    }

    /////////////////////////////////////////////

    /**
     * labelText
     */
    protected _labelText: string;
    get labelText(): string {
        return this._labelText;
    }

    set labelText(value: string) {
        this._labelText = value;
    }

    /////////////////////////////////////////////

    /**
     * labelPosition
     */
    protected _labelPosition: starRatingPosition;
    get labelPosition(): starRatingPosition {
        return this._labelPosition;
    }

    set labelPosition(value: starRatingPosition) {
        this._labelPosition = value || this.config.labelPosition;
    }

    /////////////////////////////////////////////

    /**
     * labelVisible
     */
    protected _labelVisible: boolean;
    get labelVisible(): boolean {
        return this._labelVisible;
    }

    set labelVisible(value: boolean) {
        this._labelVisible = !!value;
    }

    /////////////////////////////////////////////

    /**
     * hoverEnabled
     */
    protected _hoverEnabled: boolean;
    get hoverEnabled(): boolean {
        return this._hoverEnabled;
    }

    set hoverEnabled(value: boolean) {
        this._hoverEnabled = (value !== undefined) ? !!value : false;
    }

    /////////////////////////////////////////////

    /**
     * staticColor
     */
    protected _staticColor: starRatingColor;

    get staticColor(): starRatingColor {
        return this._staticColor;
    }

    set staticColor(value: starRatingColor) {
        this._staticColor = value || undefined;

        //update color.
        this.setColor();
    }

    /////////////////////////////////////////////

    /**
     * direction
     */
    protected _direction: starRatingDirection;

    get direction(): starRatingDirection {
        return this._direction;
    }

    set direction(value: starRatingDirection) {
        this._direction = value || undefined;
    }

    /////////////////////////////////////////////


    /**
     * numOfStars
     */
    protected _numOfStars: number;

    get numOfStars(): number {
        return this._numOfStars;
    }

    set numOfStars(value: number) {
        this._numOfStars = (value > 0) ? value : this.config.numOfStars;

        //update stars array
        this.stars = StarRatingUtils.getStarsArray(this.numOfStars);

        //update color
        this.setColor();
    }

    /////////////////////////////////////////////

    /**
     * hoverRating
     */
    protected _hoverRating: number;

    get hoverRating(): number {
        return this._hoverRating;
    }

    set hoverRating(value: number) {
        this._hoverRating = (value > 0) ? value : 0;
    }

    /////////////////////////////////////////////

    /**
     * speed
     */
    protected _speed: starRatingSpeed;

    get speed(): starRatingSpeed {
        return this._speed;
    }

    set speed(value: starRatingSpeed) {
        this._speed = value || this.config.speed;
    }

    /////////////////////////////////////////////

    /**
     * size
     */
    protected _size: starRatingSizes;

    get size(): starRatingSizes {
        return this._size;
    }

    set size(value: starRatingSizes) {
        this._size = value || this.config.size;
    }

    /////////////////////////////////////////////

    /**
     * starType
     */
    protected _starType: starRatingStarTypes;

    get starType(): starRatingStarTypes {
        return this._starType;
    }

    set starType(value: starRatingStarTypes) {
        this._starType = value || this.config.starType;
    }

    /////////////////////////////////////////////

    /**
     * space
     */
    protected _space: starRatingStarSpace;

    get space(): starRatingStarSpace {
        return this._space;
    }

    set space(value: starRatingStarSpace) {
        this._space = value;
    }

    /////////////////////////////////////////////

    /**
     * readOnly
     */
    protected _readOnly: boolean;

    get readOnly(): boolean {
        return this._readOnly;
    }

    set readOnly(value: boolean) {
        this._readOnly = !!value;
    }

    /////////////////////////////////////////////

    /**
     * disabled
     */
    protected _disabled: boolean;

    get disabled(): boolean {
        return this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = !!value;
    }


    /////////////////////////////////////////////


    private _step:number;

    get step(): number {
        return this._step;
    }

    set step(value: number) {
        this._step = (value > 0?value:1);
    }


    /////////////////////////////////////////////

    /**
     * rating
     */
    protected _rating: number;

    get rating(): number {
        return this._rating;
    }

    /**
     * setRating
     * I use a setter function instead of a set method to enable overrides for this function.
     * @param value
     */
    setRating(value: number) {
        //validate and apply newRating
        let newRating: number = 0;
        if (value >= 0
            && value <= this.numOfStars) {
            newRating = value;
        }
        //limit max value to max number of stars
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;

        //update ratingAsInteger. rating parsed to int for the value-[n] modifier
        this.ratingAsInteger = parseInt(this._rating.toString());

        //update halfStarsVisible
        this.setHalfStarVisible();

        //update calculated Color
        this.setColor();

    }

    set rating(value:number) {
        this.setRating(value);
    }

    /**
     * showHalfStars
     */
    protected _showHalfStars: boolean;

    get showHalfStars(): boolean {
        return this._showHalfStars;
    }

    set showHalfStars(value: boolean) {
        this._showHalfStars = !!value;

        //update halfStarVisible
        this.setHalfStarVisible();
    }

    /////////////////////////////////////////////

    /**
     * getColor
     */
    getColor: (rating: number, numOfStars: number, staticColor?: starRatingColor) => starRatingColor;
    /////////////////////////////////////////////

    /**
     * getHalfStarVisible
     */
    getHalfStarVisible: (rating: number) => boolean;
    /////////////////////////////////////////////

    //CTRL ONLY
    ///////////////////////////////////////////////////////////////////////////////////////////
    classEmpty: string;
    classHalf: string;
    classFilled: string;

    pathEmpty: string;
    pathHalf: string;
    pathFilled: string;

    color: starRatingColor;
    stars: Array<number>;
    ratingAsInteger: number;
    halfStarVisible: boolean;

    constructor() {

        let config = new StarRatingConfig();

        //set default ctrl props
        this.classEmpty = config.classEmpty;
        this.classHalf = config.classHalf;
        this.classFilled = config.classFilled;
        this.pathEmpty = config.svgPathEmpty;
        this.pathHalf = config.svgPathHalf;
        this.pathFilled = config.svgPathFilled;

        //set default Component Inputs
        if ('getColor' in config && typeof config.getColor === "function") {
            this.getColor = config.getColor;
        }

        if ('getHalfStarVisible' in config && typeof config.getHalfStarVisible === "function") {
            this.getHalfStarVisible = config.getHalfStarVisible;
        }

        this.numOfStars = config.numOfStars;
        this.rating =0;
        this.step=1;

    }

    svgVisible():boolean {
        return this.starType === "svg";
    }

    interactionPossible():boolean {
        return  !this.readOnly && !this.disabled;
    }

    setColor(): void {
        //check if custom function is given
        if (typeof this.getColor === "function") {
            this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingUtils.getColor(this.rating, this.numOfStars, this.staticColor);
        }
    }

    setHalfStarVisible(): void {
        //update halfStarVisible
        if (this.showHalfStars) {
            //check if custom function is given
            if (typeof this.getHalfStarVisible === "function") {
                this.halfStarVisible = this.getHalfStarVisible(this.rating);
            } else {
                this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
            }

        }
        else {
            this.halfStarVisible = false;
        }
    }

    getComponentClassNames():string {
        let classNames:string[] = [];

        classNames.push(this.rating?'value-'+this.ratingAsInteger:'value-0');
        classNames.push(this.halfStarVisible?'half':'');
        classNames.push(this.hoverEnabled?'hover':'');

        let hoverRating = (this.hoverRating?'hover-'+this.hoverRating:'hover-0');
        classNames.push(this.hoverEnabled? hoverRating :'');

        classNames.push(this.space?'space-'+this.space:'');
        classNames.push(this.labelPosition?'label-'+this.labelPosition:'');
        classNames.push(this.color?'color-'+this.color:'');
        classNames.push(this.starType?'star-'+this.starType:'');
        classNames.push(this.speed);
        classNames.push(this.size);
        classNames.push(this.readOnly?'read-only':'');
        classNames.push(this.disabled?'disabled':'');
        classNames.push(this.direction?'direction-'+this.direction:'');

        return classNames.join(' ');
    }

    increment() {
        //increment to next higher step
        let absDiff = Math.abs(this.rating%this.step);
        this.rating = this.rating + (absDiff>0?this.step - absDiff:this.step);
    }

    decrement() {
        //decrement to next lower step
        let absDiff = Math.abs(this.rating%this.step);
        this.rating = this.rating - (absDiff>0?absDiff:this.step);
    }

    reset() {
        this.rating = 0;
    }

}
