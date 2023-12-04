/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Input } from '@angular/core';

import {
  starRatingColor,
  StarRatingConfig,
  starRatingDirection,
  starRatingLabelPosition,
  starRatingSizes,
  starRatingSpeed,
  starRatingStarSpace,
  starRatingStarTypes
} from '../interfaces/star-rating-config.interface';
import { StarRatingConfigService } from './star-rating-config.service';
import { StarRatingUtils } from './star-rating.utils';

@Component({
  // Metadata needed for Angular.
  template: ``,
  standalone: true,
  selector: 'placeholder-star-rating'
})
export class StarRating {
  protected config: StarRatingConfig;

  //CTRL ONLY
  ///////////////////////////////////////////////////////////////////////////////////////////
  public classEmpty: string;
  public classHalf: string;
  public classFilled: string;

  public pathEmpty: string;
  public pathHalf: string;
  public pathFilled: string;

  public color: starRatingColor;
  public stars: Array<number>;
  public ratingAsInteger: number;
  public halfStarVisible: boolean;

  /**
   * showHalfStars
   */
  protected _showHalfStars: boolean;
  public get showHalfStars(): boolean {
    return this._showHalfStars;
  }

  @Input()
  public set showHalfStars(value: boolean) {
    this._showHalfStars = !!value;

    //update halfStarVisible
    this.setHalfStarVisible();
  }

  /**
   * getColor
   */
  public getColor: (
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor
  ) => starRatingColor;

  /////////////////////////////////////////////

  /**
   * getHalfStarVisible
   */
  public getHalfStarVisible: (rating: number) => boolean;
  /////////////////////////////////////////////

  //Inputs
  ///////////////////////////////////////////////////////////////////////////////////////////

  /**
   * id property to identify the DOM element
   */
  protected _id: string;
  public get id(): string {
    return this._id;
  }

  @Input()
  public set id(value: string) {
    this._id = value || '';
  }

  /////////////////////////////////////////////

  /**
   * focus
   */
  protected _focus: boolean;
  public get focus(): boolean {
    return this._focus;
  }

  @Input()
  public set focus(value: boolean) {
    this._focus = !!value;
  }

  /////////////////////////////////////////////

  /**
   * labelText
   */
  protected _labelText: string;
  public get labelText(): string {
    return this._labelText;
  }

  @Input()
  public set labelText(value: string) {
    this._labelText = value;
  }

  /////////////////////////////////////////////

  /**
   * labelPosition
   */
  protected _labelPosition: starRatingLabelPosition;
  public get labelPosition(): starRatingLabelPosition {
    return this._labelPosition;
  }

  @Input()
  public set labelPosition(value: starRatingLabelPosition) {
    this._labelPosition = value || this.config.labelPosition;
  }

  /////////////////////////////////////////////

  /**
   * labelVisible
   */
  protected _labelVisible: boolean;
  public get labelVisible(): boolean {
    return this._labelVisible;
  }

  @Input()
  public set labelVisible(value: boolean) {
    this._labelVisible = !!value;
  }

  /////////////////////////////////////////////

  /**
   * hoverEnabled
   */
  protected _hoverEnabled: boolean;
  public get hoverEnabled(): boolean {
    return this._hoverEnabled;
  }

  @Input()
  public set hoverEnabled(value: boolean) {
    this._hoverEnabled = value !== undefined ? !!value : false;
  }

  /////////////////////////////////////////////

  /**
   * staticColor
   */
  protected _staticColor: starRatingColor;
  public get staticColor(): starRatingColor {
    return this._staticColor || this.config.staticColor || undefined;
  }

  @Input()
  public set staticColor(value: starRatingColor) {
    this._staticColor = value;

    //update color.
    this.setColor();
  }

  /////////////////////////////////////////////

  /**
   * direction
   */
  protected _direction: starRatingDirection;
  public get direction(): starRatingDirection {
    return this._direction;
  }

  @Input()
  public set direction(value: starRatingDirection) {
    this._direction = value || undefined;
  }

  /////////////////////////////////////////////

  /**
   * numOfStars
   */
  protected _numOfStars: number;
  public get numOfStars(): number {
    return this._numOfStars;
  }

  @Input()
  public set numOfStars(value: number) {
    this._numOfStars = value > 0 ? value : this.config.numOfStars!;

    //update stars array
    this.stars = StarRatingUtils.getStarsArray(this.numOfStars);

    //update color
    this.setColor();
  }

  /////////////////////////////////////////////

  /**
   * hoverRating
   */
  protected _hoverRating: number;
  public get hoverRating(): number {
    return this._hoverRating;
  }

  @Input()
  public set hoverRating(value: number) {
    this._hoverRating = value > 0 ? value : 0;
  }

  /////////////////////////////////////////////

  /**
   * speed
   */
  protected _speed: starRatingSpeed;
  public get speed(): starRatingSpeed {
    return this._speed;
  }

  @Input()
  public set speed(value: starRatingSpeed) {
    this._speed = value || this.config.speed;
  }

  /////////////////////////////////////////////

  /**
   * size
   */
  protected _size: starRatingSizes;
  public get size(): starRatingSizes {
    return this._size || this.config.size;
  }

  @Input()
  public set size(value: starRatingSizes) {
    this._size = value;
  }

  /////////////////////////////////////////////

  /**
   * starType
   */
  protected _starType: starRatingStarTypes;
  public get starType(): starRatingStarTypes {
    return this._starType || this.config.starType;
  }

  @Input()
  public set starType(value: starRatingStarTypes) {
    this._starType = value;
  }

  /////////////////////////////////////////////

  /**
   * space
   */
  protected _space: starRatingStarSpace;
  public get space(): starRatingStarSpace {
    return this._space;
  }

  @Input()
  public set space(value: starRatingStarSpace) {
    this._space = value;
  }

  /////////////////////////////////////////////

  /**
   * readOnly
   */
  protected _readOnly: boolean;
  public get readOnly(): boolean {
    return this._readOnly;
  }

  @Input()
  public set readOnly(value: boolean) {
    this._readOnly = !!value;
  }

  /////////////////////////////////////////////

  /**
   * disabled
   */
  protected _disabled: boolean;
  public get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  public set disabled(value: boolean) {
    this._disabled = !!value;
  }

  /////////////////////////////////////////////

  private _step: number;
  public get step(): number {
    return this._step;
  }

  @Input()
  public set step(value: number) {
    this._step = value > 0 ? value : 1;
  }

  /////////////////////////////////////////////

  /**
   * rating
   */
  protected _rating: number;
  public get rating(): number {
    return this._rating;
  }

  @Input()
  public set rating(value: number) {
    this.setRating(value);
  }

  /**
   * setRating
   * I use a setter function instead of a set method to enable overrides for this function.
   * @param value
   */
  public setRating(value: number) {
    //validate and apply newRating
    let newRating = 0;
    if (value >= 0 && value <= this.numOfStars) {
      newRating = value;
    }

    //limit max value to max number of stars
    if (value > this.numOfStars) {
      newRating = this.numOfStars;
    }
    this._rating = newRating;

    //update ratingAsInteger. rating parsed to int for the value-[n] modifier
    this.ratingAsInteger = parseInt(this._rating?.toString(), 10);

    //update halfStarsVisible
    this.setHalfStarVisible();

    //update calculated Color
    this.setColor();
  }

  constructor(config: StarRatingConfigService) {
    this.config = config;

    //set default ctrl props
    this.classEmpty = this.config.classEmpty!;
    this.classHalf = this.config.classHalf!;
    this.classFilled = this.config.classFilled!;
    this.pathEmpty = this.config.svgPathEmpty!;
    this.pathHalf = this.config.svgPathHalf!;
    this.pathFilled = this.config.svgPathFilled!;

    //set default Component Inputs
    if (
      'getColor' in this.config &&
      typeof this.config.getColor === 'function'
    ) {
      this.getColor = this.config.getColor;
    }

    if (
      'getHalfStarVisible' in this.config &&
      typeof this.config.getHalfStarVisible === 'function'
    ) {
      this.getHalfStarVisible = this.config.getHalfStarVisible;
    }

    this.numOfStars = this.config.numOfStars!;
    this.rating = 0;
    this.step = 1;
  }

  public svgVisible(): boolean {
    return this.starType === 'svg';
  }

  public interactionPossible(): boolean {
    return !this.readOnly && !this.disabled;
  }

  public setColor(useHoverValue = false): void {
    //check if custom function is given
    const ratingValue = useHoverValue ? this.hoverRating : this.rating;
    if (typeof this.getColor === 'function') {
      this.color = this.getColor(
        ratingValue,
        this.numOfStars,
        this.staticColor
      );
    } else {
      this.color = StarRatingUtils.getColor(
        ratingValue,
        this.numOfStars,
        this.staticColor
      );
    }
  }

  public setHalfStarVisible(): void {
    //update halfStarVisible
    if (this.showHalfStars) {
      //check if custom function is given
      if (typeof this.getHalfStarVisible === 'function') {
        this.halfStarVisible = this.getHalfStarVisible(this.rating);
      } else {
        this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
      }
    } else {
      this.halfStarVisible = false;
    }
  }

  public getComponentClassNames(): string {
    const classNames: string[] = [];

    classNames.push(this.rating ? 'value-' + this.ratingAsInteger : 'value-0');
    classNames.push(this.halfStarVisible ? 'half' : '');
    classNames.push(this.hoverEnabled ? 'hover' : '');

    const hoverRating = this.hoverRating
      ? 'hover-' + this.hoverRating
      : 'hover-0';
    classNames.push(this.hoverEnabled ? hoverRating : '');

    classNames.push(this.space ? 'space-' + this.space : '');
    classNames.push(this.labelPosition ? 'label-' + this.labelPosition : '');
    classNames.push(this.color ? 'color-' + this.color : '');
    classNames.push(this.starType ? 'star-' + this.starType : '');
    classNames.push(this.speed);
    classNames.push(this.size);
    classNames.push(this.readOnly ? 'read-only' : '');
    classNames.push(this.disabled ? 'disabled' : '');
    classNames.push(this.direction ? 'direction-' + this.direction : '');

    return classNames.join(' ');
  }

  public increment() {
    //increment to next higher step
    const absDiff = Math.abs(this.rating % this.step);
    this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
  }

  public decrement() {
    //decrement to next lower step
    const absDiff = Math.abs(this.rating % this.step);
    this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
  }

  public reset() {
    this.rating = 0;
  }
}
