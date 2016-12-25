import {Component, OnInit, Input,Output,  OnChanges, EventEmitter} from '@angular/core';
import {starRatingSizes, starRatingSpeed,starRatingColors, starRatingSpeed, starRatingPosition, starRatingStarSpace, starRatingStarTypes, IStarRatingOnClickEvent, IStarRatingOnUpdateEvent} from "./star-rating-struct";
import {StarRatingConfig} from "./star-rating-config";

@Component({
  selector: 'star-rating-comp',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input('text') text:string = 'TEXT';

  constructor() { }

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
    //@Notice For some reason callback functions is not defined even there are defaults in the constructor

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

  //bindings


  //Input

  //Output
  @Output() onClick: EventEmitter<IStarRatingOnClickEvent>;
  @Output() onUpdate: EventEmitter<IStarRatingOnUpdateEvent>;

  protected _id: string;
  protected _labelText: string;
  protected _staticColor: starRatingColors;
  protected _labelPosition: starRatingPosition;
  protected _speed: starRatingSpeed;
  protected _size: starRatingSizes;
  protected _starType: starRatingStarTypes;
  protected _space: starRatingStarSpace;
  protected _readOnly: boolean;
  protected _disabled: boolean;
  protected _showHalfStars: boolean;
  protected _rating: number;
  protected _numOfStars: number;
  getHalfStarVisible: (rating: number) => boolean;
  getColor: (rating: number, numOfStars: number, staticColor?: starRatingColors) => starRatingColors;

  //outputs
  onClick?: ($event: any) =>  IStarRatingOnClickEvent;
  onUpdate?: ($event: any) => IStarRatingOnUpdateEvent;

  //ctrl only
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

  //getter and setter
  set numOfStars(value: number) {
    this._numOfStars = (value > 0)?value:this.config.numOfStars;

    //update stars array
    this.stars = StarRatingComponent._getStarsArray(this.numOfStars);

    //update color
    this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
  }
  get numOfStars(): number {
    return this._numOfStars;
  }

  set rating(value: number) {
    //validate and apply newRating
    let newRating:number = 0;
    if( value >= 0
      && value <= this.numOfStars) {
      newRating = value;
    }
    //limit max value to max number of stars
    if(value > this.numOfStars) {
      newRating = this.numOfStars;
    }
    this._rating = newRating;

    //update ratingAsInteger. rating parsed to int for the value-[n] modifier
    this.ratingAsInteger = parseInt(<string>this._rating);

    //update halfStarsVisible
    this.halfStarVisible = (this.showHalfStars) ? this.getHalfStarVisible(this._rating) : false;

    //fire onUpdate event
    let $event:IStarRatingOnUpdateEvent = {rating: this._rating};
    this.onUpdate({$event:$event});
  }
  get rating(): number {
    return this._rating;
  }

  set showHalfStars(value: boolean) {
    this._showHalfStars = !!value;

    //update halfStarVisible
    this.halfStarVisible = (this._showHalfStars) ? this.getHalfStarVisible(this.rating) : false;
  }
  get showHalfStars(): boolean {
    return this._showHalfStars;
  }

  set disabled(value: boolean) {
    this._disabled = !!value;
  }
  get disabled(): boolean {
    return this._disabled;
  }

  set readOnly(value: boolean) {
    this._readOnly = !!value;
  }
  get readOnly(): boolean {
    return this._readOnly;
  }

  set space(value: starRatingStarSpace) {
    this._space = value;
  }
  get space(): starRatingStarSpace {
    return this._space;
  }

  set starType(value: starRatingStarTypes) {
    this._starType = value || this.config.starType;
  }
  get starType(): starRatingStarTypes {
    return this._starType;
  }

  set size(value: starRatingSizes) {
    this._size = value || this.config.size;
  }
  get size(): starRatingSizes {
    return this._size;
  }

  set speed(value: starRatingSpeed) {
    this._speed = value || this.config.speed;
  }
  get speed(): starRatingSpeed {
    return this._speed;
  }

  set labelPosition(value: starRatingPosition) {
    this._labelPosition = value || this.config.labelPosition;
  }
  get labelPosition(): starRatingPosition {
    return this._labelPosition;
  }

  set staticColor(value: starRatingColors) {
    this._staticColor = value || undefined;

    //update color.
    this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
  }
  get staticColor(): starRatingColors {
    return this._staticColor;
  }

  set labelText(value: string) {
    this._labelText = value;
  }
  get labelText(): string {
    return this._labelText;
  }

  set id(value: string) {
    this._id = value || (parseInt(Math.random() * 10000)).toString();
  }
  get id(): string {
    return this._id;
  }

  constructor(protected config: StarRatingConfig) {
    //set default ctrl props
    this.classEmpty = config.classEmpty;
    this.classHalf = config.classHalf;
    this.classFilled = config.classFilled;
    this.pathEmpty = config.svgPathEmpty;
    this.pathHalf = config.svgPathHalf;
    this.pathFilled = config.svgPathFilled;

    //set default Component Inputs
    this.getColor = config.getColor;
    this.getHalfStarVisible = config.getHalfStarVisible;
    this.numOfStars = config.numOfStars;
    this.rating = 0;


    //set default Outputs
    this.onClick = function ($event: IStarRatingOnClickEvent) {
      return <IStarRatingOnClickEvent>{}
    };
    this.onUpdate = function ($event: IStarRatingOnUpdateEvent) {
      return <IStarRatingOnUpdateEvent>{}
    };
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
    let $event:IStarRatingOnClickEvent = {rating: rating};
    this.onClick({$event:$event});

    if (this.readOnly || this.disabled) {
      return;
    }

    this.rating = rating;

  }



}
