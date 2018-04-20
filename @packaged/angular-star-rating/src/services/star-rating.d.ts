import { StarRatingConfig, starRatingColor, starRatingDirection, starRatingLabelPosition, starRatingSizes, starRatingSpeed, starRatingStarSpace, starRatingStarTypes } from '../interfaces/star-rating-config.interface';
import { StarRatingConfigService } from './star-rating-config.service';
export declare class StarRating {
    protected config: StarRatingConfig;
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
    rating: number;
    /**
     * showHalfStars
     */
    protected _showHalfStars: boolean;
    showHalfStars: boolean;
    /**
     * getColor
     */
    getColor: (rating: number, numOfStars: number, staticColor?: starRatingColor) => starRatingColor;
    /**
     * getHalfStarVisible
     */
    getHalfStarVisible: (rating: number) => boolean;
    /**
     * id property to identify the DOM element
     */
    protected _id: string;
    id: string;
    /**
     * focus
     */
    protected _focus: boolean;
    focus: boolean;
    /**
     * labelText
     */
    protected _labelText: string;
    labelText: string;
    /**
     * labelPosition
     */
    protected _labelPosition: starRatingLabelPosition;
    labelPosition: starRatingLabelPosition;
    /**
     * labelVisible
     */
    protected _labelVisible: boolean;
    labelVisible: boolean;
    /**
     * hoverEnabled
     */
    protected _hoverEnabled: boolean;
    hoverEnabled: boolean;
    /**
     * staticColor
     */
    protected _staticColor: starRatingColor;
    staticColor: starRatingColor;
    /**
     * direction
     */
    protected _direction: starRatingDirection;
    direction: starRatingDirection;
    /**
     * numOfStars
     */
    protected _numOfStars: number;
    numOfStars: number;
    /**
     * hoverRating
     */
    protected _hoverRating: number;
    hoverRating: number;
    /**
     * speed
     */
    protected _speed: starRatingSpeed;
    speed: starRatingSpeed;
    /**
     * size
     */
    protected _size: starRatingSizes;
    size: starRatingSizes;
    /**
     * starType
     */
    protected _starType: starRatingStarTypes;
    starType: starRatingStarTypes;
    /**
     * space
     */
    protected _space: starRatingStarSpace;
    space: starRatingStarSpace;
    /**
     * readOnly
     */
    protected _readOnly: boolean;
    readOnly: boolean;
    /**
     * disabled
     */
    protected _disabled: boolean;
    disabled: boolean;
    private _step;
    step: number;
    /**
     * rating
     */
    protected _rating: number;
    /**
     * setRating
     * I use a setter function instead of a set method to enable overrides for this function.
     * @param value
     */
    setRating(value: number): void;
    constructor(config: StarRatingConfigService);
    svgVisible(): boolean;
    interactionPossible(): boolean;
    setColor(useHoverValue?: boolean): void;
    setHalfStarVisible(): void;
    getComponentClassNames(): string;
    increment(): void;
    decrement(): void;
    reset(): void;
}
