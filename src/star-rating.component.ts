import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {
  starRatingSizes,
  starRatingSpeed,
  starRatingColors,
  starRatingPosition,
  starRatingStarSpace,
  starRatingStarTypes,
  IStarRatingOnClickEvent,
  IStarRatingOnUpdateEvent
} from "./star-rating-struct";
import {StarRatingConfig} from "./star-rating-config";

@Component({
  selector: 'star-rating-comp',
  templateUrl: './star-rating.component.html',
  styleUrls : 'css-star-rating/dist/css/star-rating.css'
})
export class StarRatingComponent implements OnInit, OnChanges {

  /**
   * _getStarsArray
   *
   * returns an array of increasing numbers starting at 1
   *
   * @param numOfStars
   * @returns {Array}
   */
  static _getStarsArray(numOfStars: number): Array<number> {
    let stars = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push(i + 1);
    }
    return stars;
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

  @Input('id')
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

  @Input('labelText')
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

  @Input('labelPosition')
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

  @Input('staticColor')
  set staticColor(value: starRatingColors) {
    this._staticColor = value || undefined;

    //update color.
    //this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
  }
  /////////////////////////////////////////////

  /**
   * numOfStars
   */
  protected _numOfStars: number;

  get numOfStars(): number {
    return this._numOfStars;
  }

  @Input('numOfStars')
  set numOfStars(value: number) {
    this._numOfStars = (value > 0) ? value : this.config.numOfStars;

    //update stars array
    this.stars = StarRatingComponent._getStarsArray(this.numOfStars);

    //update color
    //this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
  }
  /////////////////////////////////////////////

  /**
   * speed
   */
  protected _speed: starRatingSpeed;

  get speed(): starRatingSpeed {
    return this._speed;
  }
  @Input('speed')
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

  @Input('size')
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

  @Input('starType')
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

  @Input('space')
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

  @Input('readOnly')
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

  @Input('disabled')
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

  @Input('rating')
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
    //this.halfStarVisible = (this.showHalfStars) ? this.getHalfStarVisible(this._rating) : false;

    //fire onUpdate event
    let $event: IStarRatingOnUpdateEvent = {rating: this._rating};
    //this.onUpdate.emit($event);
  }


  /**
   * showHalfStars
   */
  protected _showHalfStars: boolean;

  get showHalfStars(): boolean {
    return this._showHalfStars;
  }

  @Input('showHalfStars')
  set showHalfStars(value: boolean) {
    this._showHalfStars = !!value;

    //update halfStarVisible
    //this.halfStarVisible = (this._showHalfStars) ? this.getHalfStarVisible(this.rating) : false;
  }
  /////////////////////////////////////////////


  //getHalfStarVisible: (rating: number) => boolean;

  //getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;


  //Output
  ///////////////////////////////////////////////////////////////////////////////////////////
  @Output() onClick: EventEmitter<IStarRatingOnClickEvent>;
  @Output() onUpdate: EventEmitter<IStarRatingOnUpdateEvent>;



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
    //this.getColor = config.getColor;
    //this.getHalfStarVisible = config.getHalfStarVisible;
    this.numOfStars = config.numOfStars;
    this.rating = 0;

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

  }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    let valueChanged = function (key: string, changes): boolean {
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
      this.showHalfStars = changes.showHalfStars.currentValue;
    }

    if (valueChanged('space', changes)) {
      this.space = changes.space.currentValue;
    }

    if (valueChanged('readOnly', changes)) {
      this.readOnly = changes.readOnly.currentValue;
    }

    if (valueChanged('disabled', changes)) {
      this.disabled = !!changes.disabled.currentValue;
    }

    //number
    if (valueChanged('rating', changes)) {
      this.rating = changes.rating.currentValue;
    }

    if (valueChanged('numOfStars', changes)) {
      this.numOfStars = changes.numOfStars.currentValue;
    }

    //string
    if (valueChanged('labelText', changes)) {
      this.labelText = changes.labelText.currentValue;
    }

    if (valueChanged('staticColor', changes)) {
      this.staticColor = changes.staticColor.currentValue;
    }

    if (valueChanged('size', changes)) {
      this.size = changes.size.currentValue;
    }

    if (valueChanged('speed', changes)) {
      this.speed = changes.speed.currentValue;
    }

    if (valueChanged('labelPosition', changes)) {
      this.labelPosition = changes.labelPosition.currentValue;
    }

    if (valueChanged('starType', changes)) {
      this.starType = changes.starType.currentValue;
    }

  }

}
