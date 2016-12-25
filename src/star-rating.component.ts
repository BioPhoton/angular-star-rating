import {Component, OnInit, OnChanges, Input, Output, SimpleChange, EventEmitter} from '@angular/core';
import {NgFor} from "@angular/common";

export type starRatingSizes = "small" | "medium" | "large";
export type starRatingColors = "default" | "negative" | "middle" | "positive";
export type starRatingSpeed = "immediately" | "noticeable" | "slow";
export type starRatingPosition = "left" | "right" | "top" | "bottom";
export type starRatingStarTypes = "svg" | "icon" | "image";

export interface IStarRatingOnClickEvent{
  rating:number;
}

export interface IStarRatingOnUpdateEvent{
  rating:number;
}

export interface IStarRatingCompOneWayBindings {
  id?: string;
  text?: string;
  color?: starRatingColors;
  labelPosition?:starRatingPosition;
  speed?:starRatingSpeed;
  size?: starRatingSizes;
  starType?:starRatingStarTypes;
  spread?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  showHalfStars?: boolean;
  rating?: number;
  numOfStars?: number;
  getHalfStarVisible?:(rating: number) => boolean;
  getColor?: (rating:number, numOfStars:number, staticColor?:starRatingColors) => starRatingColors;
}

export interface IStarRatingCompInputs extends IStarRatingCompOneWayBindings {}

export interface IStarRatingCompOutputs {
  //override emitters
  onClick?:EventEmitter<IStarRatingOnClickEvent>;
  onUpdate?:EventEmitter<IStarRatingOnUpdateEvent>;
}

@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['star-rating.component.css'],
  directives : [NgFor]
})
export class StarRatingComponent implements OnInit, OnChanges, IStarRatingCompInputs, IStarRatingCompOutputs {

static DefaultClassEmpty:string = "default-star-empty-icon";

static DefaultClassHalf:string = "default-star-half-icon";

static DefaultClassFilled:string = "default-star-filled-icon";

static DefaultNumOfStars:number = 5;

static DefaultSize:starRatingSizes = "medium";

static DefaultSpeed:starRatingSpeed = "noticeable";

static DefaultLabelPosition:starRatingPosition = "left";

static DefaultStarType:starRatingStarTypes = "svg";

static DefaultAssetsPath:string = "assets/images/";

static DefaultSvgPath:string = StarRatingComponent.DefaultAssetsPath+"star-rating.icons.svg";
static DefaultSvgEmptySymbolId:string = "star-empty";
static DefaultSvgHalfSymbolId:string = "star-half";
static DefaultSvgFilledSymbolId:string = "star-filled";

static DefaultSvgPathEmpty:string = StarRatingComponent.DefaultSvgPath+"#"+StarRatingComponent.DefaultSvgEmptySymbolId;

static DefaultSvgPathHalf:string = StarRatingComponent.DefaultSvgPath+"#"+StarRatingComponent.DefaultSvgHalfSymbolId;

static DefaultSvgPathFilled:string = StarRatingComponent.DefaultSvgPath+"#"+StarRatingComponent.DefaultSvgFilledSymbolId;


  /**
   * getStarsArray
   *
   * returns an array of increasing numbers starting at 1
   *
   * @param numOfStars
   * @returns {Array}
   */
private static getStarsArray(numOfStars: number): Array<number> {
    let stars = [];
  for (let i = 0; i < numOfStars; i++) {
    stars.push(i + 1);
  }
  return stars;
}

  //Input
  @Input('text') text: string;
  @Input('color') color: starRatingColors;
  @Input('labelPosition') labelPosition:starRatingPosition;
  @Input('speed') speed:starRatingSpeed;
  @Input('size') size: starRatingSizes;
  @Input('starType') starType:starRatingStarTypes;
  @Input('spread') spread: boolean;
  @Input('readOnly') readOnly: boolean;
  @Input('disabled') disabled: boolean;
  @Input('showHalfStars') showHalfStars: boolean;
  @Input('rating') rating : number;
  @Input('numOfStars') numOfStars: number;
  @Input('getHalfStarVisible') getHalfStarVisible:(rating:number) => boolean;
  @Input('getColor') getColor: (rating:number, numOfStars:number, staticColor?:starRatingColors) => starRatingColors;

  //Output
  @Output() onClick: EventEmitter<IStarRatingOnClickEvent>;
  @Output() onUpdate: EventEmitter<IStarRatingOnUpdateEvent>;

  //ctrl only
  classEmpty:string;
  classHalf:string;
  classFilled:string;

  pathEmpty: string;
  pathHalf:string;
  pathFilled:string;

  stars: Array<number>;
  staticColor:starRatingColors;
  ratingAsInteger:number;
  hasHalfStarClass:boolean;

  //
  constructor() {
    //set default values
    this.classEmpty = this.classEmpty || StarRatingComponent.DefaultClassEmpty;
    this.classHalf = this.classHalf || StarRatingComponent.DefaultClassHalf;
    this.classFilled = this.classFilled || StarRatingComponent.DefaultClassFilled;
    this.pathEmpty = this.pathEmpty || StarRatingComponent.DefaultSvgPathEmpty;
    this.pathHalf = this.pathHalf || StarRatingComponent.DefaultSvgPathHalf;
    this.pathFilled = this.pathFilled || StarRatingComponent.DefaultSvgPathFilled;
    this.numOfStars = (this.numOfStars && this.numOfStars > 0) ? this.numOfStars : StarRatingComponent.DefaultNumOfStars;
    this.getColor  = (typeof this.getColor === "function") ? this.getColor : this._calculateColor;
    this.getHalfStarVisible = (typeof this.getHalfStarVisible === "function") ? this.getHalfStarVisible : this._calcHalfStarClass;

    this.updateNumOfStars(this.numOfStars);
  }

  ngOnInit() {
    this.updateNumOfStars(this.numOfStars);
  }

  ngOnChanges(changes: any): any {


    let valueChanged = function(key:string, changes):boolean {
      if (key in changes)
        if (changes[key].currentValue != changes[key].previousValue) { return true; }
      return false;
    };

    //number
    if (valueChanged('rating', changes)) {
      this.updateRating(changes.rating.currentValue, this.showHalfStars);
    }

    if ( valueChanged('numOfStars', changes)) {
      this.updateNumOfStars(changes.numOfStars.currentValue);
    }

    //string
    if (valueChanged('text', changes)) {
      this.text = changes.text.currentValue;
    }

    if (valueChanged('color' , changes)) {
      this.staticColor =(changes.color.currentValue)?changes.color.currentValue:undefined;
      this.color = this.getColor(this.ratingAsInteger, this.numOfStars, this.staticColor);
    }

    if (valueChanged('size', changes)) {
      this.size = changes.size.currentValue || StarRatingComponent.DefaultSize;
    }

    if (valueChanged('speed', changes)) {
      this.speed = changes.speed.currentValue || StarRatingComponent.DefaultSpeed;
    }

    if (valueChanged('labelPosition', changes)) {
      this.labelPosition = changes.labelPosition.currentValue || StarRatingComponent.DefaultLabelPosition;
    }

    if (valueChanged('starType', changes)) {
      this.starType = changes.starType.currentValue || StarRatingComponent.DefaultStarType;
    }

    //boolean
    if (valueChanged('showHalfStars' , changes)) {
      this.showHalfStars = !!changes.showHalfStars.currentValue;
      this.updateRating(this.rating, this.showHalfStars);
    }

    if (valueChanged('spread' , changes)) {
      this.spread = !!changes.spread.currentValue;
    }

    if (valueChanged('readOnly' , changes)) {
      this.readOnly = !!changes.readOnly.currentValue;
    }

    if (valueChanged('disabled' , changes)) {
      this.disabled = !!changes.disabled.currentValue;
    }

    //functions
    if (valueChanged('getColor' , changes)) {
      this.getColor  = (typeof changes.getColor.currentValue === "function") ? changes.getColor.currentValue : this._calculateColor;
    }

    if (valueChanged('getHalfStarVisible' , changes)) {
      this.getHalfStarVisible  = (typeof changes.getHalfStarVisible.currentValue === "function") ? changes.getHalfStarVisible.currentValue : this._calcHalfStarClass;
    }

  }

  /**
   * onStarClicked
   *
   * Is fired when a star is clicked. And updated the rating value.
   * This function returns if the disabled or readOnly
   * property is set. If provided it calls the custom onClick
   * handler with the actual rating value.
   *
   * @param rating
   */
  onStarClicked(rating: number): void {
    if (this.readOnly || this.disabled) { return; }
    console.log('onStarClicked: ', rating);
    this.updateRating(rating);
    this.onClick.emit({rating:this.rating});
  }


  /**
   * updateRating
   *
   * Used to set the rating value and update other variables
   * based on rating. This function also triggers the onUpdate emitter.
   *
   * @param value
   * @param showHalfStars?
   *
   */
  protected updateRating(value: number, showHalfStars?:boolean):void {
    this.rating = value;
    //if rating parseInt it, if not set to 0
    this.ratingAsInteger = (this.rating)?parseInt(this.rating.toString()):0;
    //if showHalfStars is true use the hasHalfStarClass function to determine if half a star is visible
    this.hasHalfStarClass = (showHalfStars)?this.getHalfStarVisible(this.rating):false;
    this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);

    this.onUpdate.emit({rating:this.rating});
  }

  /**
   * updateNumOfStars
   *
   * Used to set the numOfStars value and update other variables
   * based on numOfStars.
   *
   * @param {number} numOfStars the number of stars
   */
  protected updateNumOfStars(numOfStars: number): void  {
    this.numOfStars = (numOfStars && numOfStars > 0)?numOfStars:StarRatingComponent.DefaultNumOfStars;
    this.stars = StarRatingComponent.getStarsArray(this.numOfStars);
    this.color = this.getColor(this.rating, this.numOfStars, this.staticColor);
  }

  /**
   * hasHalfStarClass
   *
   * Returns true if there should be a half star visible, and false if not.
   *
   * @param rating
   * @returns {boolean}
   */
  protected _calcHalfStarClass = (rating: number): boolean => {
    return Math.abs(rating % 1) > 0;
  };

  /**
   * _calculateColor
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
  protected _calculateColor = (rating:number, numOfStars:number, staticColor?:starRatingColors):starRatingColors => {
    rating = rating || 0;

    //if a static color is set use this one
    if(staticColor) { return staticColor; }

    //calculate size of smallest fraction
    let fractionSize = numOfStars / 3;

    //apply color by fraction
    let color:starRatingColors = 'default';
    if (rating > 0) { color = 'negative'; }
    if (rating > fractionSize) { color = 'middle'; }
    if (rating > fractionSize * 2) { color = 'positive'; }

    return color;
  };

}