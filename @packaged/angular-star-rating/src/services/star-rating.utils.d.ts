import { starRatingColor } from '../interfaces/star-rating-config.interface';
export declare class StarRatingUtils {
    static getStarsArray(numOfStars: number): Array<number>;
    static getHalfStarVisible(rating: number): boolean;
    static getColor(rating: number, numOfStars: number, staticColor?: starRatingColor): starRatingColor;
    static isDigitKeyEventCode(eventCode: string): boolean;
}
