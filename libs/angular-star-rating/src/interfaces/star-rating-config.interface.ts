export type starRatingSizes = 'small' | 'medium' | 'large';
export type starRatingColor = 'default' | 'negative' | 'ok' | 'positive';
export type starRatingSpeed = 'immediately' | 'noticeable' | 'slow';
export type starRatingLabelPosition = 'left' | 'right' | 'top' | 'bottom';
export type starRatingStarTypes = 'svg' | 'icon' | 'custom-icon';
export type starRatingStarSpace = 'no' | 'between' | 'around';
export type starRatingDirection = 'rtl' | 'ltr';

export class StarRatingConfig {
  // binding defaults
  numOfStars?: number;
  size?: starRatingSizes;
  speed?: starRatingSpeed;
  labelPosition?: starRatingLabelPosition;
  starType?: starRatingStarTypes;
  staticColor: starRatingColor;
  getColor?: (
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor
  ) => starRatingColor;
  getHalfStarVisible?: (rating: number) => boolean;
  // statics
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
