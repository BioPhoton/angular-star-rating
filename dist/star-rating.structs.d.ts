export declare type starRatingSizes = "small" | "medium" | "large";
export declare type starRatingColors = "default" | "negative" | "ok" | "positive";
export declare type starRatingSpeed = "immediately" | "noticeable" | "slow";
export declare type starRatingPosition = "left" | "right" | "top" | "bottom";
export declare type starRatingStarTypes = "svg" | "icon" | "image";
export declare type starRatingStarSpace = "no" | "between" | "around";
export interface IStarRatingCompBindings {
    id?: string;
    labelText?: string;
    staticColor?: starRatingColors;
    labelPosition?: starRatingPosition;
    speed?: starRatingSpeed;
    size?: starRatingSizes;
    starType?: starRatingStarTypes;
    space?: starRatingStarSpace;
    readOnly?: boolean;
    disabled?: boolean;
    showHalfStars?: boolean;
    rating?: number;
    numOfStars?: number;
    getHalfStarVisible?(rating: number): boolean;
    getColor?(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors;
    onClick?: ($event: any) => any;
    onUpdate?: ($event: any) => any;
}
export interface IStarRatingOnClickEvent {
    rating: number;
}
export interface IStarRatingOnUpdateEvent {
    rating: number;
}
