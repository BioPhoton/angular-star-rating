export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";

export class StarRatingController {
    static DefaultNumOfStars:number = 5;
    static DefaultSize:starRatingSizes = "medium";
    static DefaultSpeed:starRatingSpeed = "noticeable";

    //bindings
    //@
    id: string;
    //iconType: string;
    pathEmpty: string;
    pathFilled:string;
    //<
    text: string;
    color: starRatingColors;
    numOfStars: number;
    speed:starRatingSpeed;
    size: starRatingSizes;
    spread: boolean;
    readOnly: boolean;
    disabled: boolean;
    rating: number;
    //&
    getColor: Function;
    onClick: Function;
    onUpdate: Function;

    //ctrl only
    stars: Array<number>;

    updateRating(value: number) {
        console.log('updateRating: ', value);
        this.rating = value;
        this.color = this.getColor(this.rating, this.numOfStars);
        this.onUpdate({rating: this.rating});
    }

    updateNumOfStars(value: number) {
        console.log('updateNumOfStars: ', value);
        this.numOfStars = value;
        this.stars = this.getStarsArray(this.numOfStars);
        this.color = this.getColor(this.rating, this.numOfStars);
    }

    constructor() {
        console.log('constructor');
        this.pathEmpty = this.pathEmpty || "assets/images/icons.svg#star";
        this.pathFilled = this.pathFilled || "assets/images/icons.svg#star-filled";
        this.getColor  = this.getColor || this.calculateColor;
        this.onUpdate  = this.onUpdate || function () {};
        this.onClick  = this.onClick || function () {};

        this.updateNumOfStars(this.numOfStars || StarRatingController.DefaultNumOfStars);
    }

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
            this.color = changes.color.currentValue || this.getColor(this.rating, this.numOfStars);
        }

        if (valueChanged('size', changes)) {
            this.size = changes.size.currentValue || StarRatingController.DefaultSize;
        }

        if (valueChanged('speed', changes)) {
            this.speed = changes.speed.currentValue || StarRatingController.DefaultSpeed;
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

    starClick(rating: number): void {
        console.log('starClick: ', rating);
        if (this.readOnly || this.disabled) { return; }

        this.updateRating(rating);
        this.onClick({rating: this.rating});
    }

    private calculateColor = (rating, numOfStars):starRatingColors => {
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


    private getStarsArray(numOfStars: number): Array<number> {
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        console.log('getStarsArray: ', stars);
        return stars;
    }

}

