export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right" | "top" | "bottom";
export type starRatingStarTypes = "svg" | "icon" | "image";

export class StarRatingController {

    static DefaultNumOfStars:number = 5;

    static DefaultSize:starRatingSizes = "medium";

    static DefaultSpeed:starRatingSpeed = "noticeable";

    static DefaultLabelPosition:starRatingPosition = "left";

    static DefaultStarType:starRatingStarTypes = "svg";

    static DefaultAssetsPath:string = "assets/images/";

    static DefaultSvgPath:string = StarRatingController.DefaultAssetsPath+"star-rating.icons.svg";
    static DefaultSvgEmptySymbolId:string = "star";
    static DefaultSvgFilledSymbolId:string = "star-filled";

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
    fixedColor:starRatingColors;

    //
    constructor() {
        this.classEmpty = this.classEmpty || "star-empty-icon";
        this.classFilled = this.classFilled || "star-filled-icon";
        this.pathEmpty = this.pathEmpty || StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgEmptySymbolId;
        this.pathFilled = this.pathFilled || StarRatingController.DefaultSvgPath+"#"+StarRatingController.DefaultSvgFilledSymbolId;
        this.getColor  = this.getColor || this.calculateColor;
        this.onUpdate  = this.onUpdate || function () {};
        this.onClick  = this.onClick || function () {};

        this.updateNumOfStars(this.numOfStars);
    }

    /**
     * $onChanges
     *
     * angulars $onChange hook
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
            this.fixedColor =(changes.color.currentValue)?changes.color.currentValue:undefined;
            this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
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
     * based on rating. This function also
     * triggers the onUpdate emitter.
     *
     * @param value
     */
    private updateRating(value: number) {
        this.rating = value;
        this.onUpdate({rating: this.rating});
        this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
    }

    /**
     * updateNumOfStars
     *
     * Used to set the numOfStars value and update other variables
     * based on numOfStars.
     *
     * @param {number} nomOfStars the number of stars
     */
    private updateNumOfStars(nomOfStars: number) {
        this.numOfStars = nomOfStars || StarRatingController.DefaultNumOfStars;
        this.stars = StarRatingController.getStarsArray(this.numOfStars);
        this.color = this.getColor(this.rating, this.numOfStars, this.fixedColor);
    }

    /**
     * calculateColor
     *
     * The default function for color calculation
     * basted on the current rating and the scale
     *
     *
     * @param rating
     * @param numOfStars
     * @param fixColor
     * @returns {starRatingColors}
     */
    private calculateColor = (rating, numOfStars, fixColor):starRatingColors => {

        if(fixColor) { return fixColor; }

        let oneThird = numOfStars / 3;
        let color:starRatingColors = 'negative';

        if (rating > oneThird) { color = 'middle'; }
        if (rating > oneThird * 2) { color = 'positive'; }

        return color;
    };

}