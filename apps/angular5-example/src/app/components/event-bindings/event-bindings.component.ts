import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '@angular-star-rating-lib/angular-star-rating';
import {Component} from '@angular/core';

@Component({
  selector: 'events-binings',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Event Bindings</h1>
          <star-rating-comp
            [hoverEnabled]="true"
            (starClickChange)="onClick($event)"
            (ratingChange)="onRatingChange($event)"
            (hoverRatingChange)="onHoverRatingChange($event)">
          </star-rating-comp>
         
          <hr>
          
          <div class="row">

            <div class="col">
              <b>onHoverRatingChangeResult:</b>
              <pre>{{onHoverRatingChangeResult | json}}</pre>
            </div>

            <div class="col">
              <b>onClickResult:</b>
              <pre>{{onClickResult | json}}</pre>
            </div>

            
            <div class="col">
              <b>onRatingChangeResult:</b>
              <pre>{{onRatingChangeResult | json}}</pre>
            </div>
                       

          </div>
        </div>
      </div>
    </div>
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
