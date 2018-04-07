export declare type starRatingSizes = 'small' | 'medium' | 'large';
export declare type starRatingColor = 'default' | 'negative' | 'ok' | 'positive';
export declare type starRatingSpeed = 'immediately' | 'noticeable' | 'slow';
export declare type starRatingLabelPosition = 'left' | 'right' | 'top' | 'bottom';
export declare type starRatingStarTypes = 'svg' | 'icon' | 'custom-icon';
export declare type starRatingStarSpace = 'no' | 'between' | 'around';
export declare type starRatingDirection = 'rtl' | 'ltr';
export declare class StarRatingConfig {
    numOfStars?: number;
    size?: starRatingSizes;
    speed?: starRatingSpeed;
    labelPosition?: starRatingLabelPosition;
    starType?: starRatingStarTypes;
    staticColor: starRatingColor;
    getColor?: (rating: number, numOfStars: number, staticColor?: starRatingColor) => starRatingColor;
    getHalfStarVisible?: (rating: number) => boolean;
    classEmpty?: string;
    classHalf?: string;
    classFilled?: string;
    assetsPath?: string;
    svgPath?: string;
    svgEmptySymbolId?: string;
    svgHalfSymbolId?: string;
    svgFilledSymbolId?: string;
    svgPathEmpty?: string;
    svgPathHalf?: string;
    svgPathFilled?: string;
}
