import { Component, OnInit } from '@angular/core';
/*import {
  starRatingColors, starRatingPosition, starRatingStarTypes,
  starRatingSpeed, starRatingSizes, starRatingStarSpace, IStarRatingOnClickEvent, IStarRatingOnUpdateEvent
} from "../../../../../../src/star-rating-struct";
*/

@Component({
  selector: 'star-rating-bindings-form',
  templateUrl: './star-rating-bindings-form.component.html',
  styleUrls: ['./star-rating-bindings-form.component.sass']
})
export class StarRatingBindingsFormComponent implements OnInit {
  /*
//option sets
  colorOptions:Array<starRatingColors|string> = ['default','negative', 'ok', 'positive'];
  labelPositionOptions:Array<starRatingPosition|string> = ['top','right', 'left', 'bottom'];
  starOptions:Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
  speedOptions:Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
  sizeOptions:Array<starRatingSizes> = ['small', 'medium', 'large'];
  spaceOptions:Array<starRatingStarSpace|string> = ['around', 'between', 'no'];

  //component input properties (> bindings)
  id: string;
  //pathEmpty: string;
  //pathFilled:string;
  numOfStars:number = 5;
  rating: number = 3.5;
  labelText: number = this.rating;
  color:starRatingColors;
  speed:starRatingSpeed|string;
  size: starRatingSizes|string;
  space: boolean = false;
  readOnly: boolean = false;
  disabled: boolean = false;
  showHalfStars:boolean = false;
  //component input functions (> bindings)
  getColor;
  useCustomCetColor:boolean = false;
  getHalfStarVisible;
  useCustomGetHalfStarVisible:boolean = false;
   */

  submitted = false;

  model


  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
