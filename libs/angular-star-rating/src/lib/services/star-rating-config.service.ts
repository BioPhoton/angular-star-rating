import { starRatingColor, StarRatingConfig, starRatingLabelPosition, starRatingSizes, starRatingSpeed, starRatingStarTypes } from '../interfaces/star-rating-config.interface';

/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
export class StarRatingConfigService implements StarRatingConfig {
  private _classEmpty = 'default-star-empty-icon';

  public get classEmpty() {
    return this._classEmpty;
  }

  public set classEmpty(classEmpty: string) {
    this._classEmpty = classEmpty;
  }

  private _classHalf = 'default-star-half-icon';

  public get classHalf(): string {
    return this._classHalf;
  }

  public set classHalf(classHalf: string) {
    this._classHalf = classHalf;
  }

  private _classFilled = 'default-star-filled-icon';

  public get classFilled(): string {
    return this._classFilled;
  }

  public set classFilled(classFilled: string) {
    this._classFilled = classFilled;
  }

  private _numOfStars = 5;

  public get numOfStars(): number {
    return this._numOfStars;
  }

  public set numOfStars(numOfStars: number) {
    this._numOfStars = numOfStars;
  }

  private _size: starRatingSizes = 'medium';

  public get size(): starRatingSizes {
    return this._size;
  }

  public set size(size: starRatingSizes) {
    this._size = size;
  }

  private _staticColor: starRatingColor;

  public get staticColor(): starRatingColor {
    return this._staticColor;
  }

  public set staticColor(value: starRatingColor) {
    this._staticColor = value;
  }

  private _labelPosition: starRatingLabelPosition = 'left';

  public get labelPosition(): starRatingLabelPosition {
    return this._labelPosition;
  }

  public set labelPosition(labelPosition: starRatingLabelPosition) {
    this._labelPosition = labelPosition;
  }

  private _speed: starRatingSpeed = 'noticeable';

  public get speed(): starRatingSpeed {
    return this._speed;
  }

  public set speed(speed: starRatingSpeed) {
    this._speed = speed;
  }

  private _starType: starRatingStarTypes = 'svg';

  public get starType(): starRatingStarTypes {
    return this._starType;
  }

  public set starType(starType: starRatingStarTypes) {
    this._starType = starType;
  }

  private _assetsPath = 'assets/images/';

  public get assetsPath(): string {
    return this._assetsPath;
  }

  public set assetsPath(assetsPath: string) {
    this._assetsPath = assetsPath;
  }

  private _svgPath = this.assetsPath + 'star-rating.icons.svg';

  public get svgPath(): string {
    return this._svgPath;
  }

  public set svgPath(svgPath: string) {
    this._svgPath = svgPath;
  }

  private _svgEmptySymbolId = 'star-empty';

  public get svgEmptySymbolId(): string {
    return this._svgEmptySymbolId;
  }

  public set svgEmptySymbolId(svgEmptySymbolId: string) {
    this._svgEmptySymbolId = svgEmptySymbolId;
  }

  private _svgHalfSymbolId = 'star-half';

  public get svgHalfSymbolId(): string {
    return this._svgHalfSymbolId;
  }

  public set svgHalfSymbolId(svgHalfSymbolId: string) {
    this._svgHalfSymbolId = svgHalfSymbolId;
  }

  private _svgFilledSymbolId = 'star-filled';

  public get svgFilledSymbolId(): string {
    return this._svgFilledSymbolId;
  }

  public set svgFilledSymbolId(svgFilledSymbolId: string) {
    this._svgFilledSymbolId = svgFilledSymbolId;
  }

  private _svgPathEmpty: string = this.svgPath + '#' + this.svgEmptySymbolId;

  public get svgPathEmpty(): string {
    return this._svgPathEmpty;
  }

  public set svgPathEmpty(svgPathEmpty: string) {
    this._svgPathEmpty = svgPathEmpty;
  }

  private _svgPathHalf: string = this.svgPath + '#' + this.svgHalfSymbolId;

  public get svgPathHalf(): string {
    return this._svgPathHalf;
  }

  public set svgPathHalf(svgPathHalf: string) {
    this._svgPathHalf = svgPathHalf;
  }

  private _svgPathFilled: string = this.svgPath + '#' + this.svgFilledSymbolId;

  public get svgPathFilled(): string {
    return this._svgPathFilled;
  }

  public set svgPathFilled(svgPathFilled: string) {
    this._svgPathFilled = svgPathFilled;
  }

  public getColor(
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

  public getHalfStarVisible(rating: number): boolean {
    return Math.abs(rating % 1) > 0;
  }
}
