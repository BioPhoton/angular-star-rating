import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {ItemService} from "./item.service";
import {IStarRatingOnClickEvent} from "angular-star-rating/src/star-rating-struct";
import {IStarRatingCompBindings} from "angular-star-rating/src//star-rating-struct";
import {IDynamicFormOnPayLoadChangeEvent} from "../../common/dynamic-form/dynamic-form-scruct";

@Component({
  moduleId: module.id,
  selector: 'start',
  templateUrl: 'start.component.html',
})
export class StartComponent implements OnInit, OnChanges {

  items: any[];
  starRatingConfig:IStarRatingCompBindings = {
    rating:0
  };

  constructor(protected service:ItemService) {
   this.items = service.getQuestions();
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  onPayloadChange($event:IDynamicFormOnPayLoadChangeEvent) {
    console.log('onPayloadChange $event', $event);
  }

  onClick($event:IStarRatingOnClickEvent) {
    console.log('onClick $event', $event);
  }

  onRatingChange($event:IStarRatingOnClickEvent) {
    console.log('onRatingChange $event', $event);
  }
}
