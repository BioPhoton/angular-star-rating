import { StarRatingConfig, starRatingColor, starRatingSizes, starRatingSpeed, starRatingStarTypes, starRatingLabelPosition } from '../interfaces/star-rating-config.interface';
/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
export declare class StarRatingConfigService implements StarRatingConfig {
    _classEmpty: string;
    classEmpty: string;
    private _classHalf;
    classHalf: string;
    private _classFilled;
    classFilled: string;
    private _numOfStars;
    numOfStars: number;
    private _size;
    size: starRatingSizes;
    private _staticColor;
    staticColor: starRatingColor;
    private _labelPosition;
    labelPosition: starRatingLabelPosition;
    private _speed;
    speed: starRatingSpeed;
    private _starType;
    starType: starRatingStarTypes;
    private _assetsPath;
    assetsPath: string;
    private _svgPath;
    svgPath: string;
    private _svgEmptySymbolId;
    svgEmptySymbolId: string;
    private _svgHalfSymbolId;
    svgHalfSymbolId: string;
    private _svgFilledSymbolId;
    svgFilledSymbolId: string;
    private _svgPathEmpty;
    svgPathEmpty: string;
    private _svgPathHalf;
    svgPathHalf: string;
    private _svgPathFilled;
    svgPathFilled: string;
    getColor(rating: number, numOfStars: number, staticColor?: starRatingColor): starRatingColor;
    getHalfStarVisible(rating: number): boolean;
}
