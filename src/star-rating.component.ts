import {Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges} from '@angular/core';
import {
  starRatingSizes,
  starRatingSpeed,
  starRatingColors,
  starRatingPosition,
  starRatingStarSpace,
  starRatingStarTypes,
  IStarRatingOnClickEvent,
  IStarRatingOnRatingChangeEvent
} from "./star-rating-struct";
import {StarRatingConfig} from "./star-rating-config";

@Component({
  selector: 'star-rating-comp',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  //Static methods
  ///////////////////////////////////////////////////////////////////////////////////////////

  /**
   * _getStarsArray
   *
   * returns an array of increasing numbers starting at 1
   *
   * @param numOfStars
   * @returns {Array}
   */
  static _getStarsArray(numOfStars: number): Array<number> {
    let stars: Array<number> = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push(i + 1);
    }
    return stars;
  }

  /**
   * _getHalfStarVisible
   *
   * Returns true if there should be a half star visible, and false if not.
   *
   * @param rating
   * @returns {boolean}
   */
  static _getHalfStarVisible(rating: number): boolean {
    return Math.abs(rating % 1) > 0;
  }

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
  static _getColor(rating: number, numOfStars: number, staticColor?: starRatingColors): starRatingColors {
    rating = rating || 0;

    //if a fix color is set use this one
    if (staticColor) {
      return staticColor;
    }

    //calculate size of smallest fraction
    let fractionSize = numOfStars / 3;

    //apply color by fraction
    let color: starRatingColors = 'default';
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

  //Inputs
  ///////////////////////////////////////////////////////////////////////////////////////////

  /**
   * id property to identify the DOM element
   */
  protected _id: string;
  get id(): string {
    return this._id;
  }

  @Input()
  set id(value: string) {
    this._id = value || '';
  }

  /////////////////////////////////////////////

  /**
   * labelText
   */
  protected _labelText: string;
  get labelText(): string {
    return this._labelText;
  }

  @Input()
  set labelText(value: string) {
    this._labelText = value;
  }

  /////////////////////////////////////////////

  /**
   * labelPosition
   */
  protected _labelPosition: starRatingPosition;
  get labelPosition(): starRatingPosition {
    return this._labelPosition;
  }

  @Input()
  set labelPosition(value: starRatingPosition) {
    this._labelPosition = value || this.config.labelPosition;
  }

  /////////////////////////////////////////////

  /**
   * staticColor
   */
  protected _staticColor: starRatingColors;

  get staticColor(): starRatingColors {
    return this._staticColor;
  }

  @Input()
  set staticColor(value: starRatingColors) {
    this._staticColor = value || undefined;

    //update color.
    this.setColor();
  }

  /////////////////////////////////////////////

  /**
   * numOfStars
   */
  protected _numOfStars: number;

  get numOfStars(): number {
    return this._numOfStars;
  }

  @Input()
  set numOfStars(value: number) {
    this._numOfStars = (value > 0) ? value : this.config.numOfStars;

    //update stars array
    this.stars = StarRatingComponent._getStarsArray(this.numOfStars);

    //update color
    this.setColor();
  }

  /////////////////////////////////////////////

  /**
   * speed
   */
  protected _speed: starRatingSpeed;

  get speed(): starRatingSpeed {
    return this._speed;
  }

  @Input()
  set speed(value: starRatingSpeed) {
    this._speed = value || this.config.speed;
  }

  /////////////////////////////////////////////

  /**
   * size
   */
  protected _size: starRatingSizes;

  get size(): starRatingSizes {
    return this._size;
  }

  @Input()
  set size(value: starRatingSizes) {
    this._size = value || this.config.size;
  }

  /////////////////////////////////////////////

  /**
   * starType
   */
  protected _starType: starRatingStarTypes;

  get starType(): starRatingStarTypes {
    return this._starType;
  }

  @Input()
  set starType(value: starRatingStarTypes) {
    this._starType = value || this.config.starType;
  }

  /////////////////////////////////////////////

  /**
   * space
   */
  protected _space: starRatingStarSpace;

  get space(): starRatingStarSpace {
    return this._space;
  }

  @Input()
  set space(value: starRatingStarSpace) {
    this._space = value;
  }

  /////////////////////////////////////////////

  /**
   * readOnly
   */
  protected _readOnly: boolean;

  get readOnly(): boolean {
    return this._readOnly;
  }

  @Input()
  set readOnly(value: boolean) {
    this._readOnly = !!value;
  }

  /////////////////////////////////////////////

  /**
   * disabled
   */
  protected _disabled: boolean;

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = !!value;
  }

  /////////////////////////////////////////////

  /**
   * rating
   */
  protected _rating: number;

  get rating(): number {
    return this._rating;
  }

  @Input()
  set rating(value: number) {
    //validate and apply newRating
    let newRating: number = 0;
    if (value >= 0
      && value <= this.numOfStars) {
      newRating = value;
    }
    //limit max value to max number of stars
    if (value > this.numOfStars) {
      newRating = this.numOfStars;
    }
    this._rating = newRating;

    //update ratingAsInteger. rating parsed to int for the value-[n] modifier
    this.ratingAsInteger = parseInt(this._rating.toString());

    //update halfStarsVisible
    this.setHalfStarVisible();

    //update calculated Color
    this.setColor();


    //fire onRatingChange event
    let $event: IStarRatingOnRatingChangeEvent = {rating: this._rating};
    this.onRatingChange.emit($event);
  }


  /**
   * showHalfStars
   */
  protected _showHalfStars: boolean;

  get showHalfStars(): boolean {
    return this._showHalfStars;
  }

  @Input()
  set showHalfStars(value: boolean) {
    this._showHalfStars = !!value;

    //update halfStarVisible
    this.setHalfStarVisible();
  }

  /////////////////////////////////////////////

  /**
   * getColor
   */
  @Input()
  getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;
  /////////////////////////////////////////////

  /**
   * getHalfStarVisible
   */
  @Input()
  getHalfStarVisible: (rating: number) => boolean;
  /////////////////////////////////////////////

  //Output
  ///////////////////////////////////////////////////////////////////////////////////////////
  @Output()
  onClick: EventEmitter<IStarRatingOnClickEvent> = new EventEmitter<IStarRatingOnClickEvent>();

  @Output()
  onRatingChange: EventEmitter<IStarRatingOnRatingChangeEvent> = new EventEmitter<IStarRatingOnRatingChangeEvent>();

  //CTRL ONLY
  ///////////////////////////////////////////////////////////////////////////////////////////
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

  constructor(protected config: StarRatingConfig) {

    //set default ctrl props
    this.classEmpty = config.classEmpty;
    this.classHalf = config.classHalf;
    this.classFilled = config.classFilled;
    this.pathEmpty = config.svgPathEmpty;
    this.pathHalf = config.svgPathHalf;
    this.pathFilled = config.svgPathFilled;

    //set default Component Inputs
    if ('getColor' in config && typeof config.getColor === "function") {
      this.getColor = config.getColor;
    }

    if ('getHalfStarVisible' in config && typeof config.getHalfStarVisible === "function") {
      this.getHalfStarVisible = config.getHalfStarVisible;
    }

    this.numOfStars = config.numOfStars;
    this.rating = 0;

  }


  setColor(): void {
    //check if custom function is given
    if (typeof this.getColor === "function") {
      this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
    }
    else {
      this.color = StarRatingComponent._getColor(this.rating, this.numOfStars, this.staticColor);
    }
  }

  setHalfStarVisible(): void {
    //update halfStarVisible
    if (this.showHalfStars) {
      //check if custom function is given
      if (typeof this.getHalfStarVisible === "function") {
        this.halfStarVisible = this.getHalfStarVisible(this.rating);
      } else {
        this.halfStarVisible = StarRatingComponent._getHalfStarVisible(this.rating);
      }

    }
    else {
      this.halfStarVisible = false;
    }
  }

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
  protected onStarClicked(rating: number): void {

    //fire onClick event
    let $event: IStarRatingOnClickEvent = {rating: rating};
    //this.onClick.emit($event);

    if (this.readOnly || this.disabled) {
      return;
    }

    this.rating = rating;

    let onClickEventObject:IStarRatingOnClickEvent = {
      rating:this.rating
    };
    this.onClick.emit(onClickEventObject);

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    let valueChanged = function (key: string, changes: SimpleChanges): boolean {
      if (key in changes) {
        if (
          //(changes[key].previousValue != 'UNINITIALIZED_VALUE' && changes[key].currentValue !== undefined)
        changes[key].currentValue != changes[key].previousValue) {
          return true;
        }
      }
      return false;
    };

    //---------------------------------------

    //functions

    //boolean
    if (valueChanged('showHalfStars', changes)) {
      this.showHalfStars = changes['showHalfStars'].currentValue;
    }

    if (valueChanged('space', changes)) {
      this.space = changes['space'].currentValue;
    }

    if (valueChanged('readOnly', changes)) {
      this.readOnly = changes['readOnly'].currentValue;
    }

    if (valueChanged('disabled', changes)) {
      this.disabled = !!changes['disabled'].currentValue;
    }

    //number
    if (valueChanged('rating', changes)) {
      this.rating = changes['rating'].currentValue;
    }

    if (valueChanged('numOfStars', changes)) {
      this.numOfStars = changes['numOfStars'].currentValue;
    }

    //string
    if (valueChanged('labelText', changes)) {
      this.labelText = changes['labelText'].currentValue;
    }

    if (valueChanged('staticColor', changes)) {
      this.staticColor = changes['staticColor'].currentValue;
    }

    if (valueChanged('size', changes)) {
      this.size = changes['size'].currentValue;
    }

    if (valueChanged('speed', changes)) {
      this.speed = changes['speed'].currentValue;
    }

    if (valueChanged('labelPosition', changes)) {
      this.labelPosition = changes['labelPosition'].currentValue;
    }

    if (valueChanged('starType', changes)) {
      this.starType = changes['starType'].currentValue;
    }

  }

}
