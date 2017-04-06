import { Component } from '@angular/core';
import {StarRatingConfig} from "../../../../src/star-rating-config";
import {starRatingColors} from "../../../../src/star-rating-struct";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  starRatingConfig;

  constructor() {

    this.starRatingConfig = {};

    this.starRatingConfig.numOfStars = 7;
    this.starRatingConfig.size = "large";
    this.starRatingConfig.speed = "slow";
    this.starRatingConfig.labelPosition = "right";
    this.starRatingConfig.starType = "svg";
    this.starRatingConfig.id = 1221;
    this.starRatingConfig.labelText = "Label text here";
    this.starRatingConfig.staticColor = "negative";
    this.starRatingConfig.space = "around";
    this.starRatingConfig.disabled  = false;
    this.starRatingConfig.readOnly = false;
    this.starRatingConfig.rating = 2;
    this.starRatingConfig.showHalfStars = true;
    this.starRatingConfig.getColor = (rating: number, numOfStars: number, staticColor?: starRatingColors) => {
      return staticColor || "ok";
    };
    this.starRatingConfig.getHalfStarVisible=true;

    //Outputs
    this.starRatingConfig.onClick = ($event) => {
      console.log('onClick $event: ', $event);
    }

    this.starRatingConfig.onRatingChange = ($event) => {
      console.log('onRatingUpdated $event: ', $event);
    }
  }


}
