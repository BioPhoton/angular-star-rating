import {
  StarRatingConfig,
  starRatingColor,
  starRatingSizes,
  starRatingSpeed,
  starRatingStarTypes,
  starRatingLabelPosition
} from '../interfaces/star-rating-config.interface';

/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
export class StarRatingConfigService implements StarRatingConfig {
  _classEmpty = 'default-star-empty-icon';

  get classEmpty() {
    return this._classEmpty;
  }

  set classEmpty(classEmpty: string) {
    this._classEmpty = classEmpty;
  }

  private _classHalf = 'default-star-half-icon';

  get classHalf(): string {
    return this._classHalf;
  }

  set classHalf(classHalf: string) {
    this._classHalf = classHalf;
  }

  private _classFilled = 'default-star-filled-icon';

  get classFilled(): string {
    return this._classFilled;
  }

  set classFilled(classFilled: string) {
    this._classFilled = classFilled;
  }

  private _numOfStars = 5;

  get numOfStars(): number {
    return this._numOfStars;
  }

  set numOfStars(numOfStars: number) {
    this._numOfStars = numOfStars;
  }

  private _size: starRatingSizes = 'medium';

  get size(): starRatingSizes {
    return this._size;
  }

  set size(size: starRatingSizes) {
    this._size = size;
  }

  private _staticColor: starRatingColor;

  get staticColor(): starRatingColor {
    return this._staticColor;
  }

  set staticColor(value: starRatingColor) {
    this._staticColor = value;
  }

  private _labelPosition: starRatingLabelPosition = 'left';

  get labelPosition(): starRatingLabelPosition {
    return this._labelPosition;
  }

  set labelPosition(labelPosition: starRatingLabelPosition) {
    this._labelPosition = labelPosition;
  }

  private _speed: starRatingSpeed = 'noticeable';

  get speed(): starRatingSpeed {
    return this._speed;
  }

  set speed(speed: starRatingSpeed) {
    this._speed = speed;
  }

  private _starType: starRatingStarTypes = 'svg';

  get starType(): starRatingStarTypes {
    return this._starType;
  }

  set starType(starType: starRatingStarTypes) {
    this._starType = starType;
  }

  private _assetsPath = 'assets/images/';

  get assetsPath(): string {
    return this._assetsPath;
  }

  set assetsPath(assetsPath: string) {
    this._assetsPath = assetsPath;
  }

  private _svgPath = this.assetsPath + 'star-rating.icons.svg';

  get svgPath(): string {
    return this._svgPath;
  }

  set svgPath(svgPath: string) {
    this._svgPath = svgPath;
  }

  private _svgEmptySymbolId = 'star-empty';

  get svgEmptySymbolId(): string {
    return this._svgEmptySymbolId;
  }

  set svgEmptySymbolId(svgEmptySymbolId: string) {
    this._svgEmptySymbolId = svgEmptySymbolId;
  }

  private _svgHalfSymbolId = 'star-half';

  get svgHalfSymbolId(): string {
    return this._svgHalfSymbolId;
  }

  set svgHalfSymbolId(svgHalfSymbolId: string) {
    this._svgHalfSymbolId = svgHalfSymbolId;
  }

  private _svgFilledSymbolId = 'star-filled';

  get svgFilledSymbolId(): string {
    return this._svgFilledSymbolId;
  }

  set svgFilledSymbolId(svgFilledSymbolId: string) {
    this._svgFilledSymbolId = svgFilledSymbolId;
  }

  private _svgPathEmpty: string = this.svgPath + '#' + this.svgEmptySymbolId;

  get svgPathEmpty(): string {
    return this._svgPathEmpty;
  }

  set svgPathEmpty(svgPathEmpty: string) {
    this._svgPathEmpty = svgPathEmpty;
  }

  private _svgPathHalf: string = this.svgPath + '#' + this.svgHalfSymbolId;

  get svgPathHalf(): string {
    return this._svgPathHalf;
  }

  set svgPathHalf(svgPathHalf: string) {
    this._svgPathHalf = svgPathHalf;
  }

  private _svgPathFilled: string = this.svgPath + '#' + this.svgFilledSymbolId;

  get svgPathFilled(): string {
    return this._svgPathFilled;
  }

  set svgPathFilled(svgPathFilled: string) {
    this._svgPathFilled = svgPathFilled;
  }

  getColor(
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor
  ): starRatingColor {
    rating = rating || 0;

    // if a fix color is set use this one
    if (staticColor) {
      return staticColor;
    }

    // calculate size of smallest fraction
    const fractionSize = numOfStars / 3;

    // apply color by fraction
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

  getHalfStarVisible(rating: number): boolean {
    return Math.abs(rating % 1) > 0;
  }
}
