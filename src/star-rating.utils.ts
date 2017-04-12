import {starRatingColor} from "./star-rating-struct";
export class StarRatingUtils {
    //Static methods
    ///////////////////////////////////////////////////////////////////////////////////////////

    /**
     * getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    static getStarsArray(numOfStars: number): Array<number> {
        let stars: Array<number> = [];
        for (let i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }

    /**
     * getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    static getHalfStarVisible(rating: number): boolean {
        return Math.abs(rating % 1) > 0;
    }

    /**
     * getColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColor}
     */
    static getColor(rating: number, numOfStars: number, staticColor?: starRatingColor): starRatingColor {
        rating = rating || 0;

        //if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }

        //calculate size of smallest fraction
        let fractionSize = numOfStars / 3;

        //apply color by fraction
        let color: starRatingColor = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }

        return color;
    }

    /**
     * isDigitKeyEventCode
     * detects digit key event sodes
     * @param eventCode
     * @returns {boolean}
     */
    static isDigitKeyEventCode = (eventCode: string): boolean => {
        return eventCode.indexOf('Digit') === 0;
    };

}