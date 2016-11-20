export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right" | "top" | "bottom";
export type starRatingStarTypes = "svg" | "icon" | "image";

export interface IStarRatingCompBindings {
    //@
    id?: string;
    //<
    text?: string;
    color?: starRatingColors;
    labelPosition?:starRatingPosition;
    speed?:starRatingSpeed;
    size?: starRatingSizes;
    starType?:starRatingStarTypes;
    spread?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    rating?: number;
    numOfStars?: number;
    //&
    getColor?: Function;
    onClick?: Function;
    onUpdate?: Function;
}

export class StarRatingController implements IStarRatingCompBindings{

    static DefaultClassEmpty:string = "default-star-empty-icon";

    static DefaultClassFilled:string = "default-star-filled-icon";

    static DefaultNumOfStars:number = 5;

    static DefaultSize:starRatingSizes = "medium";

    static DefaultSpeed:starRatingSpeed = "noticeable";

    static DefaultLabelPosition:starRatingPosition = "left";

    static DefaultStarType:starRatingStarTypes = "svg";

    static DefaultAssetsPath:string = "assets/images/";

    static DefaultSvgPath:string = StarRatingController.DefaultAssetsPath+"star-rating.icons.svg";
    static DefaultSvgEmptySymbolId:string = "star";
    static DefaultSvgFilledSymbolId:string = "star-filled";

    static DefaultSvgPathEmpty:string = StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgEmptySymbolId;

    static DefaultSvgPathFilled:string = StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgFilledSymbolId;


    /**
     * getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    private static getStarsArray(numOfStars: number): Array<number> {
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }

    //bindings
    //@
    id: string;
    //<
    text: string;
    color: starRatingColors;
    labelPosition:starRatingPosition;
    speed:starRatingSpeed;
    size: starRatingSizes;
    starType:starRatingStarTypes;
    spread: boolean;
    readOnly: boolean;
    disabled: boolean;
    rating: number;
    numOfStars: number;
    //&
    getColor: Function;
    onClick: Function;
    onUpdate: Function;

    //ctrl only
    classEmpty:string;
    classFilled:string;
    pathEmpty: string;
    pathFilled:string;
    stars: Array<number>;
    staticColor:starRatingColors;

    //
    constructor() {
        //set default values
        this.classEmpty = this.classEmpty || StarRatingController.DefaultClassEmpty;
        this.classFilled = this.classFilled || StarRatingController.DefaultClassFilled;
        this.pathEmpty = this.pathEmpty || StarRatingController.DefaultSvgPathEmpty;
        this.pathFilled = this.pathFilled || StarRatingController.DefaultSvgPathFilled;
        this.numOfStars = (this.numOfStars && this.numOfStars > 0)?this.numOfStars:StarRatingController.DefaultNumOfStars;
        this.getColor  = (typeof this.getColor === "function")?this.getColor:this.calculateColor;
        this.onUpdate  = this.onUpdate || function () {};
        this.onClick  = this.onClick || function () {};

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
                if (changes[key].currentValue != changes[key].previousValue) { console.log('key', changes[key].currentValue); return true; }
            return false;
        };

        //number
        if (valueChanged('rating', changes)) {
            this.updateRating(changes.rating.currentValue);
        }

        if ( valueChanged('numOfStars', changes)) {
            this.updateNumOfStars(changes.numOfStars.currentValue);
        }

        //string
        if (valueChanged('text', changes)) {
            this.text = changes.text.currentValue;
        }

        if (valueChanged('color' , changes)) {
            this.staticColor =(changes.color.currentValue)?changes.color.currentValue:undefined;
            this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        }

        if (valueChanged('size', changes)) {
            this.size = changes.size.currentValue || StarRatingController.DefaultSize;
        }

        if (valueChanged('speed', changes)) {
            this.speed = changes.speed.currentValue || StarRatingController.DefaultSpeed;
        }

        if (valueChanged('labelPosition', changes)) {
            this.labelPosition = changes.labelPosition.currentValue || StarRatingController.DefaultLabelPosition;
        }

        if (valueChanged('starType', changes)) {
            this.starType = changes.starType.currentValue || StarRatingController.DefaultStarType;
        }

        //boolean
        if (valueChanged('spread' , changes)) {
            this.spread = !!changes.spread.currentValue;
        }

        if (valueChanged('readOnly' , changes)) {
            this.readOnly = !!changes.readOnly.currentValue;
        }

        if (valueChanged('disabled' , changes)) {
            this.disabled = !!changes.disabled.currentValue;
        }

    }

    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it calls the custom onClick
     * handler with the actual rating value.
     *
     * @param rating
     */
    onStarClicked(rating: number): void {
        if (this.readOnly || this.disabled) { return; }

        this.updateRating(rating);
        this.onClick({rating: this.rating});
    }


    /**
     * updateRating
     *
     * Used to set the rating value and update other variables
     * based on rating. This function also triggers the onUpdate emitter.
     *
     * @param value
     */
    private updateRating(value: number) {
        this.rating = value;
        this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
        this.onUpdate({rating: this.rating});
    }

    /**
     * updateNumOfStars
     *
     * Used to set the numOfStars value and update other variables
     * based on numOfStars.
     *
     * @param {number} numOfStars the number of stars
     */
    private updateNumOfStars(numOfStars: number) {
        this.numOfStars = (numOfStars && numOfStars > 0)?numOfStars:StarRatingController.DefaultNumOfStars;
        this.stars = StarRatingController.getStarsArray(this.numOfStars);
        this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
    }

    /**
     * calculateColor
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
    private calculateColor = (rating:number, numOfStars:number, staticColor?:starRatingColors):starRatingColors => {
        //if a fix color is set use this one
        if(staticColor) { return staticColor; }

        //calculate size of smallest fraction
        let fractionSize = numOfStars / 3;

        //apply color by fraction
        let color:starRatingColors = 'negative';
        if (rating > fractionSize) { color = 'middle'; }
        if (rating > fractionSize * 2) { color = 'positive'; }

        return color;
    };

}