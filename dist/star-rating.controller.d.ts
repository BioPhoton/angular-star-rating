import IChangesObject = angular.IChangesObject;
export declare type starRatingSizes = "small" | "medium" | "large";
export declare type starRatingColors = "default" | "negative" | "middle" | "positive";
export declare type starRatingSpeed = "immediately" | "noticeable" | "slow";
export declare type starRatingPosition = "left" | "right" | "top" | "bottom";
export declare type starRatingStarTypes = "svg" | "icon" | "image";
export interface IStarRatingCompBindings {
    id?: string;
    text?: string;
    staticColor?: starRatingColors;
    labelPosition?: starRatingPosition;
    speed?: starRatingSpeed;
    size?: starRatingSizes;
    starType?: starRatingStarTypes;
    spread?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    showHalfStars?: boolean;
    rating?: number;
    numOfStars?: number;
    getHalfStarVisible?(rating: number): boolean;
    getColor?(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors;
    onClick?: ($event: any) => IStarRatingOnClickEvent;
    onUpdate?: ($event: any) => IStarRatingOnUpdateEvent;
}
export interface IStarRatingOnClickEvent {
    rating: number;
}
export interface IStarRatingOnUpdateEvent {
    rating: number;
}
export declare class StarRatingController implements ng.IComponentController, IStarRatingCompBindings {
    static DefaultClassEmpty: string;
    static DefaultClassHalf: string;
    static DefaultClassFilled: string;
    static DefaultNumOfStars: number;
    static DefaultSize: starRatingSizes;
    static DefaultSpeed: starRatingSpeed;
    static DefaultLabelPosition: starRatingPosition;
    static DefaultStarType: starRatingStarTypes;
    static DefaultAssetsPath: string;
    static DefaultSvgPath: string;
    static DefaultSvgEmptySymbolId: string;
    static DefaultSvgHalfSymbolId: string;
    static DefaultSvgFilledSymbolId: string;
    static DefaultSvgPathEmpty: string;
    static DefaultSvgPathHalf: string;
    static DefaultSvgPathFilled: string;
    /**
     * _getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    protected static _getStarsArray(numOfStars: number): Array<number>;
    /**
     * _getHalfStarVisible
     *
     * Returns true if there should be a half star visible, and false if not.
     *
     * @param rating
     * @returns {boolean}
     */
    protected static _getHalfStarVisible(rating: number): boolean;
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
    protected static _getColor(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors;
    protected _id: string;
    protected _text: string;
    protected _staticColor: starRatingColors;
    protected _labelPosition: starRatingPosition;
    protected _speed: starRatingSpeed;
    protected _size: starRatingSizes;
    protected _starType: starRatingStarTypes;
    protected _spread: boolean;
    protected _readOnly: boolean;
    protected _disabled: boolean;
    protected _showHalfStars: boolean;
    protected _rating: number;
    protected _numOfStars: number;
    getHalfStarVisible: (rating: number) => boolean;
    getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;
    onClick?: ($event: any) => IStarRatingOnClickEvent;
    onUpdate?: ($event: any) => IStarRatingOnUpdateEvent;
    classEmpty: string;
    classHalf: string;
    classFilled: string;
    pathEmpty: string;
    pathHalf: string;
    pathFilled: string;
    color: starRatingColors;
    stars: Array<number>;
    ratingAsInteger: number;
    halfStarVisible: boolean;
    $onInit?(): void;
    $onChanges?(changesObj: {
        [property: string]: IChangesObject;
    }): void;
    $onDestroy?(): void;
    $postLink?(): void;
    numOfStars: number;
    rating: number;
    showHalfStars: boolean;
    disabled: boolean;
    readOnly: boolean;
    spread: boolean;
    starType: starRatingStarTypes;
    size: starRatingSizes;
    speed: starRatingSpeed;
    labelPosition: starRatingPosition;
    staticColor: starRatingColors;
    text: string;
    id: string;
    setGetColor(func: any): void;
    setGetHalfStarVisible(func: any): void;
    constructor();
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
    protected onStarClicked(rating: number): void;
}
