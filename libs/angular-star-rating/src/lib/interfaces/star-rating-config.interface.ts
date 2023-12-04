export type starRatingSizes = 'small' | 'medium' | 'large';
export type starRatingColor = 'default' | 'negative' | 'ok' | 'positive';
export type starRatingSpeed = 'immediately' | 'noticeable' | 'slow';
export type starRatingLabelPosition = 'left' | 'right' | 'top' | 'bottom';
export type starRatingStarTypes = 'svg' | 'icon' | 'custom-icon';
export type starRatingStarSpace = 'no' | 'between' | 'around';
export type starRatingDirection = 'rtl' | 'ltr';

export class StarRatingConfig {
  // binding defaults
  public numOfStars?: number;
  public size?: starRatingSizes;
  public speed?: starRatingSpeed;
  public labelPosition?: starRatingLabelPosition;
  public starType?: starRatingStarTypes;
  public staticColor: starRatingColor;
  public getColor?: (
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor
  ) => starRatingColor;
  public getHalfStarVisible?: (rating: number) => boolean;
  // statics
  public classEmpty?: string;
  public classHalf?: string;
  public classFilled?: string;
  public assetsPath?: string;
  public svgPath?: string;
  public svgEmptySymbolId?: string;
  public svgHalfSymbolId?: string;
  public svgFilledSymbolId?: string;
  public svgPathEmpty?: string;
  public svgPathHalf?: string;
  public svgPathFilled?: string;
}
