import { Component } from '@angular/core';

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

    this.starRatingConfig.id = 1221;
    this.starRatingConfig.rating = 2.22368;
    this.starRatingConfig.showHalfStars = true;
    this.starRatingConfig.numOfStars = 7;
    this.starRatingConfig.size = "large";
    this.starRatingConfig.space = "around";
    this.starRatingConfig.staticColor = "negative";
    this.starRatingConfig.disabled  = false;
    this.starRatingConfig.starType = "svg";
    this.starRatingConfig.labelPosition = "right";
    this.starRatingConfig.labelText = "Label text here";
    this.starRatingConfig.labelVisible = true;
    this.starRatingConfig.speed = "slow";
    this.starRatingConfig.hoverEnabled = true;
    this.starRatingConfig.direction = "rtl";
    this.starRatingConfig.step = 0.5;
    this.starRatingConfig.readOnly = false;
    this.starRatingConfig.getColor = (rating: number, numOfStars: number, staticColor?: any) => {
      return staticColor || "ok";
    };
    this.starRatingConfig.getHalfStarVisible=(rating):boolean => {
     return Math.abs(rating % 1) > 0;
    };

    //Outputs
    this.starRatingConfig.onClick = ($event) => {
      console.log('onClick $event: ', $event);
    };

    this.starRatingConfig.onRatingChange = ($event) => {
      console.log('onRatingUpdated $event: ', $event);
    };

    this.starRatingConfig.onHoverRatingChange = ($event) => {
      console.log('onHoverRatingChange $event: ', $event);
    };


  }


}
