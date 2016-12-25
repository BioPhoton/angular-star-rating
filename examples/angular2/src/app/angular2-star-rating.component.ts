import { Component } from '@angular/core';
import {StarRatingComponent} from 'angular2-star-rating/src/index';

console.log('StarRatingComponent: ', StarRatingComponent);
@Component({
  moduleId: module.id,
  selector: 'angular2-star-rating-app',
  templateUrl: 'angular2-star-rating.component.html',
  styleUrls: ['angular2-star-rating.component.css'],
  directives : [StarRatingComponent]
})

export class Angular2StarRatingAppComponent {
  title:string = 'angular2-star-rating works!';
  rating:number = 3;

 /*
  onUpdate($event:IStarRatingOnUpdateEvent) {
    console.log("onUpdate: ", $event);
    this.rating = $event.rating;
  }

  onClick($event:IStarRatingOnClickEvent) {
    console.log("onClick: ", $event.rating);
  }
  */

  constructor() {

  }

}
