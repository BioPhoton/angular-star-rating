export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "default" | "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right" | "top" | "bottom";
export type starRatingStarTypes = "svg" | "icon" | "image";

export interface IStarRatingCompBindings {
    //<
    id?: string;
    text?: string;
    staticColor?: starRatingColors;
    labelPosition?:starRatingPosition;
    speed?:starRatingSpeed;
    size?: starRatingSizes;
    starType?:starRatingStarTypes;
    spread?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    showHalfStars?: boolean;
    rating?: number;
    numOfStars?: number;
    getHalfStarVisible?(rating: number) : boolean;
    getColor?(rating:number, numOfStars:number, staticColor?:starRatingColors) : starRatingColors;
    //&
    onClick?:($event: any) =>  IStarRatingOnClickEvent;
    onUpdate?:($event: any) => IStarRatingOnUpdateEvent;
}

export interface IStarRatingOnClickEvent{
    rating:number;
}

export interface IStarRatingOnUpdateEvent{
    rating:number;
}

export class StarRatingController implements IStarRatingCompBindings{

    set numOfStars(value: number) {
        this._numOfStars = value;
    }
    get numOfStars():number {
        return this._numOfStars;
    }

    set rating(value: number) {
        this._rating = value;
    }
    get rating(): number {
        return this._rating;
    }

    set showHalfStars(value: boolean) {
        this._showHalfStars = !!value;
    }
    get showHalfStars():boolean {
        return this._showHalfStars;
    }

    set disabled(value: boolean) {
        this._disabled = !!value;
    }
    get disabled():boolean {
        return this._disabled;
    }

    set readOnly(value: boolean) {
        this._readOnly = !!value;
    }
    get readOnly(): boolean {
        return this._readOnly;
    }

    set spread(value: boolean) {
        this._spread = !!value;
    }
    get spread() : boolean{
        return this._spread;
    }

    set starType(value: starRatingStarTypes) {
        this._starType = value || StarRatingController.DefaultStarType;
    }
    get starType(): starRatingStarTypes {
        return this._starType;
    }

    set size(value: starRatingSizes) {
        this._size = value || StarRatingController.DefaultSize;
    }
    get size() : starRatingSizes{
        return this._size;
    }

    set speed(value: starRatingSpeed) {
        this._speed = value || StarRatingController.DefaultSpeed;
    }
    get speed(): starRatingSpeed {
        return this._speed;
    }

    set labelPosition(value: starRatingPosition) {
        this._labelPosition = value  || StarRatingController.DefaultLabelPosition;
    }
    get labelPosition(): starRatingPosition {
        return this._labelPosition;
    }

    set staticColor(value: starRatingColors) {
        this._staticColor = value || undefined;
    }
    get staticColor(): starRatingColors {
        return this._staticColor;
    }

    set text(value: string) {
        this._text = value;
    }
    get text(): string {
        return this._text;
    }

    set id(value: string) {
        this._id = value || (Math.random()*1000).toString();
    }
    get id(): string {
        return this._id;
    }

    static DefaultClassEmpty:string = "default-star-empty-icon";

    static DefaultClassHalf:string = "default-star-half-icon";

    static DefaultClassFilled:string = "default-star-filled-icon";

    static DefaultNumOfStars:number = 5;

    static DefaultSize:starRatingSizes = "medium";

    static DefaultSpeed:starRatingSpeed = "noticeable";

    static DefaultLabelPosition:starRatingPosition = "left";

    static DefaultStarType:starRatingStarTypes = "svg";

    static DefaultAssetsPath:string = "assets/images/";

    static DefaultSvgPath:string = StarRatingController.DefaultAssetsPath+"star-rating.icons.svg";
    static DefaultSvgEmptySymbolId:string = "star-empty";
    static DefaultSvgHalfSymbolId:string = "star-half";
    static DefaultSvgFilledSymbolId:string = "star-filled";

    static DefaultSvgPathEmpty:string = StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgEmptySymbolId;

    static DefaultSvgPathHalf:string = StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgHalfSymbolId;

    static DefaultSvgPathFilled:string = StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgFilledSymbolId;

    /**
     * _getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    protected static _getStarsArray(numOfStars: number): Array<number> {
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }

    /**
     * _getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    protected static _getHalfStarVisible(rating: number): boolean {
        return Math.abs(rating % 1) > 0;
    }

    /**
     * _getColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColors}
     */
    protected static _getColor(rating:number, numOfStars:number, staticColor?:starRatingColors):starRatingColors {
        rating = rating || 0;

        //if a fix color is set use this one
        if(staticColor) { return staticColor; }

        //calculate size of smallest fraction
        let fractionSize = numOfStars / 3;

        //apply color by fraction
        let color:starRatingColors = 'default';
        if (rating > 0) { color = 'negative'; }
        if (rating > fractionSize) { color = 'middle'; }
        if (rating > fractionSize * 2) { color = 'positive'; }

        return color;
    }


    //bindings

    //inputs
    protected _id: string;
    protected _text: string;
    protected _staticColor: starRatingColors;
    protected _labelPosition:starRatingPosition;
    protected _speed:starRatingSpeed;
    protected _size: starRatingSizes;
    protected _starType:starRatingStarTypes;
    protected _spread: boolean;
    protected _readOnly: boolean;
    protected _disabled: boolean;
    protected _showHalfStars: boolean;
    protected _rating: number;
    protected _numOfStars: number;
    getHalfStarVisible:(rating: number) => boolean;
    getColor: (rating:number, numOfStars:number, staticColor?:starRatingColors) => starRatingColors;

    //outputs
    onClick?:($event:any) =>  IStarRatingOnClickEvent;
    onUpdate?:($event:any) => IStarRatingOnUpdateEvent;

    //ctrl only
    classEmpty:string;
    classHalf:string;
    classFilled:string;

    pathEmpty: string;
    pathHalf:string;
    pathFilled:string;

    color: starRatingColors;
    stars: Array<number>;
    ratingAsInteger:number;
    hasHalfStarClass:boolean;

    //
    constructor() {
        //set default values
        this.classEmpty = this.classEmpty || StarRatingController.DefaultClassEmpty;
        this.classHalf = this.classHalf || StarRatingController.DefaultClassHalf;
        this.classFilled = this.classFilled || StarRatingController.DefaultClassFilled;
        this.pathEmpty = this.pathEmpty || StarRatingController.DefaultSvgPathEmpty;
        this.pathHalf = this.pathHalf || StarRatingController.DefaultSvgPathHalf;
        this.pathFilled = this.pathFilled || StarRatingController.DefaultSvgPathFilled;
        this.numOfStars = (this.numOfStars && this.numOfStars > 0) ? this.numOfStars : StarRatingController.DefaultNumOfStars;
        this.getColor  = (typeof this.getColor === "function") ? this.getColor : StarRatingController._getColor;
        this.getHalfStarVisible = (typeof this.getHalfStarVisible === "function") ? this.getHalfStarVisible : StarRatingController._getHalfStarVisible;
        //this.onUpdate  = this.onUpdate || function () {};
        //this.onClick  = this.onClick || function () {};

        this.updateNumOfStars(this.numOfStars);
    }

    /**
     * $onChanges
     *
     *The components $onChange hook
     *
     * @param changes
     */
     $onChanges(changes): void {

        let valueChanged = function(key:string, changes):boolean {
            if (key in changes)
                if (changes[key].currentValue != changes[key].previousValue) { return true; }
            return false;
        };

        //number
        if (valueChanged('rating', changes)) {
            this.updateRating(changes.rating.currentValue, this.showHalfStars);
        }

        if ( valueChanged('numOfStars', changes)) {
            this.updateNumOfStars(changes.numOfStars.currentValue);
        }

        //string
        if (valueChanged('text', changes)) {
            this.text = changes.text.currentValue;
        }

        if (valueChanged('staticColor' , changes)) {
            this.staticColor = changes.staticColor.currentValue;
            this.color = this.getColor(this.ratingAsInteger, this.numOfStars, this.staticColor);
        }

        if (valueChanged('size', changes)) {
            this.size = changes.size.currentValue;
        }

        if (valueChanged('speed', changes)) {
            this.speed = changes.speed.currentValue;
        }

        if (valueChanged('labelPosition', changes)) {
            this.labelPosition = changes.labelPosition.currentValue;
        }

        if (valueChanged('starType', changes)) {
            this.starType = changes.starType.currentValue;
        }

        //boolean
        if (valueChanged('showHalfStars' , changes)) {
            this.showHalfStars = changes.showHalfStars.currentValue;
            this.updateRating(this.rating, this.showHalfStars);
        }

        if (valueChanged('spread' , changes)) {
            this.spread = changes.spread.currentValue;
        }

        if (valueChanged('readOnly' , changes)) {
            this.readOnly = changes.readOnly.currentValue;
        }

        if (valueChanged('disabled' , changes)) {
            this.disabled = !!changes.disabled.currentValue;
        }

        //functions
        if (valueChanged('getColor' , changes)) {
            this.getColor  = (typeof changes.getColor.currentValue === "function") ? changes.getColor.currentValue : this._calculateColor;
        }

        if (valueChanged('getHalfStarVisible' , changes)) {
            this.getHalfStarVisible = (typeof changes.getHalfStarVisible.currentValue === "function") ? changes.getHalfStarVisible.currentValue : StarRatingController._getHalfStarVisible;
        }

    }

    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param rating
     */
    protected onStarClicked(rating: number): void {
        if (this.readOnly || this.disabled) { return; }
        //rerender component
        this.updateRating(rating);

        //emit onClick event
        this.onClick({$event: {rating: rating}});
    }

    /**
     * updateRating
     *
     * Used to set the rating value and update other variables
     * based on rating. This function also emits the onUpdate event.
     *
     * @param value
     * @param showHalfStars?
     *
     */
    protected updateRating(value: number, showHalfStars?:boolean):void {
        this.rating = value;

        //if rating parseInt it if not set to 0
        this.ratingAsInteger = (this.rating)?parseInt(this.rating.toString()):0;

        //if showHalfStars is true use the hasHalfStarClass function to determine if half a star is visible
        this.hasHalfStarClass = (showHalfStars)?this.getHalfStarVisible(this.rating):false;
        this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        //emit onUpdate event
        this.onUpdate({$event: {rating: this.rating}});
    }

    /**
     * updateNumOfStars
     *
     * Used to set the numOfStars value and update other variables
     * based on numOfStars.
     *
     * @param {number} numOfStars the number of stars
     */
    protected updateNumOfStars(numOfStars: number): void  {
        this.numOfStars = numOfStars;
        this.stars = StarRatingController._getStarsArray(this.numOfStars);
        this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
    }

}