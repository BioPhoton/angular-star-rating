import { Component } from '@angular/core';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '@angular-star-rating-lib/angular-star-rating';

@Component({
  selector: 'events-binings',
  template: `<star-rating-comp
                  [hoverEnabled]="true"
                  (onClick)="onClick($event)" 
                  (onRatingChange)="onRatingChange($event)"
                  (onHoverRatingChange)="onHoverRatingChange($event)">                             
            </star-rating-comp>
            <p>onHoverRatingChangeResult: {{onHoverRatingChangeResult | json}}</p>
            <p>onClickResult: {{onClickResult | json}}</p>
            <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>
    `
})
export class EventBindingsComponent {
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;
  onRatingChangeResult: RatingChangeEvent;

  onClick = ($event: ClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  };

  onRatingChange = ($event: RatingChangeEvent) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  };

  onHoverRatingChange = ($event: HoverRatingChangeEvent) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  };
}
