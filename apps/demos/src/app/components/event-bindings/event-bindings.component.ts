import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent,
} from '@angular-star-rating-lib/index';
import { Component } from '@angular/core';

@Component({
  selector: 'events-binings',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Event Bindings</h1>
          <star-rating
            [hoverEnabled]="true"
            (starClickChange)="onClick($event)"
            (ratingChange)="onRatingChange($event)"
            (hoverRatingChange)="onHoverRatingChange($event)"
          >
          </star-rating>

          <hr />

          <div class="row">
            <div class="col">
              <b>onHoverRatingChangeResult:</b>
              <pre>{{ onHoverRatingChangeResult | json }}</pre>
            </div>

            <div class="col">
              <b>onClickResult:</b>
              <pre>{{ onClickResult | json }}</pre>
            </div>

            <div class="col">
              <b>onRatingChangeResult:</b>
              <pre>{{ onRatingChangeResult | json }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class EventBindingsComponent {
  onClickResult: ClickEvent;
  onHoverRatingChangeResult: HoverRatingChangeEvent;
  onRatingChangeResult: RatingChangeEvent;

  onClick = ($event: ClickEvent) => {
    this.onClickResult = $event;
  };

  onRatingChange = ($event: RatingChangeEvent) => {
    this.onRatingChangeResult = $event;
  };

  onHoverRatingChange = ($event: HoverRatingChangeEvent) => {
    this.onHoverRatingChangeResult = $event;
  };
}
