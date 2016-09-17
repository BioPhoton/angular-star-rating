export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right";

export class StarRatingController {

    static DefaultNumOfStars:number = 5;

    static DefaultSize:starRatingSizes = "medium";

    static DefaultSpeed:starRatingSpeed = "noticeable";

    static DefaultLabelPosition:starRatingPosition = "left";

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
        console.log('getStarsArray: ', stars);
        return stars;
    }

    //bindings
    //@
    id: string;
    //iconType: string;
    pathEmpty: string;
    pathFilled:string;
    //<
    text: string;
    color: starRatingColors;
    labelPosition:starRatingPosition;
    speed:starRatingSpeed;
    size: starRatingSizes;
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
    stars: Array<number>;
    fixedColor:starRatingColors;

    constructor() {
        console.log('constructor');
        this.pathEmpty = this.pathEmpty || "assets/images/icons.svg#star";
        this.pathFilled = this.pathFilled || "assets/images/icons.svg#star-filled";
        this.getColor  = this.getColor || this.calculateColor;
        this.onUpdate  = this.onUpdate || function () {};
        this.onClick  = this.onClick || function () {};

        this.updateNumOfStars(this.numOfStars || StarRatingController.DefaultNumOfStars);
    }

    /**
     * $onChanges
     *
     * angulars $onChange hook
     *
     * @param changes
     */
     $onChanges(changes): void {
        console.log('$onChanges');

        let valueChanged = function(key:string, changes):boolean {
            if (key in changes)
                if (changes[key].currentValue != changes[key].previousValue) {
                    console.log(key + ' changed');
                    return true;
                }
            return false;
        };

        //number
        if (valueChanged('rating', changes)) {
            this.updateRating(changes.rating.currentValue);
        }

        if ( valueChanged('numOfStars', changes)) {
            this.updateNumOfStars(changes.numOfStars.currentValue || StarRatingController.DefaultNumOfStars);
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
        console.log('onStarClicked: ', rating);
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
        console.log('updateRating: ', value);
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
     * @param value
     */
    private updateNumOfStars(value: number) {
        console.log('updateNumOfStars: ', value);
        this.numOfStars = value;
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

        if(fixColor) {
            console.log('fixColor: ', fixColor, rating, numOfStars);
            return fixColor;
        }

        let oneThird = numOfStars / 3;

        let color:starRatingColors = 'negative';
        if (rating > oneThird) {
            color = 'middle';
        }
        if (rating > oneThird * 2) {
            color = 'positive';
        }

        console.log('color: ', color, rating, numOfStars);

        return color;
    };

}

