import {Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges} from '@angular/core';
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
  moduleId:module.id,
  selector: 'star-rating-comp',
  templateUrl: 'star-rating.component.html',
  styleUrls : ['star-rating.css']
})
export class StarRatingComponent implements OnInit, OnChanges {


  constructor() {

  }

  ngOnInit(){

  }

  ngOnChanges() {

  }
}
