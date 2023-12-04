import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ClickEvent } from '../../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../../interfaces/rating-change-event.interface';
import { starRatingColor } from '../../interfaces/star-rating-config.interface';
import { StarRating } from '../../services/star-rating';
import { StarRatingConfigService } from '../../services/star-rating-config.service';
import { StarRatingUtils } from '../../services/star-rating.utils';

@Component({
  selector: 'star-rating',
  standalone: true,
  templateUrl: 'star-rating.component.html'
})
export class StarRatingComponent extends StarRating {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Input() public getHalfStarVisible: (rating: number) => boolean = (rating: number) => false;

  @Input() public getColor: (
    rating: number,
    numOfStars: number,
    staticColor?: starRatingColor | undefined
  ) => starRatingColor;

  @Output()
  public starClickChange: EventEmitter<ClickEvent> = new EventEmitter<ClickEvent>();

  @Output()
  public ratingChange: EventEmitter<RatingChangeEvent> = new EventEmitter<RatingChangeEvent>();

  @Output()
  public hoverRatingChange: EventEmitter<HoverRatingChangeEvent> = new EventEmitter<HoverRatingChangeEvent>();

  protected saveOnClick($event: ClickEvent) {
    if (this.starClickChange) {
      this.starClickChange.emit($event);
    }
  }

  protected saveOnRatingChange($event: RatingChangeEvent) {
    if (this.ratingChange) {
      this.ratingChange.emit($event);
    }
  }

  protected saveOnHover($event: HoverRatingChangeEvent) {
    if (this.hoverRatingChange) {
      this.hoverRatingChange.emit($event);
    }
  }

  /**ACCESSIBILITY **/

  //Keyboard events
  protected onKeyDown(event: KeyboardEvent) {
    if (!this.interactionPossible()) {
      return;
    }

    const handlers: Record<string, () => void> = {
      //Decrement
      Minus: () => this.decrement(),
      ArrowDown: () => this.decrement(),
      ArrowLeft: () => this.decrement(),

      //Increment
      Plus: () => this.increment(),
      ArrowRight: () => this.increment(),
      ArrowUp: () => this.increment(),

      //Reset
      Backspace: () => this.reset(),
      Delete: () => this.reset(),
      Digit0: () => this.reset()
    };

    const handleDigits = (eventCode: string): void => {
      const dStr = 'Digit';
      const digit: number = parseInt(
        eventCode.substr(dStr.length, eventCode.length - 1),
        10
      );
      this.rating = digit;
    };

    if (
      handlers[event['code']] ||
      StarRatingUtils.isDigitKeyEventCode(event['code'])
    ) {
      if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
        handleDigits(event['code']);
      } else {
        handlers[event['code']]();
      }
      event.preventDefault();
      event.stopPropagation();
    }
  }

  //Hover events
  protected onStarHover(rating?: number): void {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }

    this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
    //update calculated Color
    this.setColor(true);

    //fire onHoverRatingChange event
    const $event: HoverRatingChangeEvent = { hoverRating: this.hoverRating };
    this.saveOnHover($event);
  }

  protected onStopHover() {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }

    this.hoverRating = 0;
    //update calculated Color
    this.setColor();
  }

  constructor(config: StarRatingConfigService) {
    super(config);
  }

  //Overrides
  public setRating(value: number): void {
    const initValue = this.rating;
    super.setRating(value);

    //if value changed trigger valueAccessor events and outputs
    if (initValue !== this.rating) {
      const $event: RatingChangeEvent = { rating: this.rating };
      this.saveOnRatingChange($event);
    }
  }

  /**
   * onStarClicked
   *
   * Is fired when a star is clicked. And updated the rating value.
   * This function returns if the disabled or readOnly
   * property is set. If provided it emits the onClick event
   * handler with the actual rating value.
   *
   * @param rating
   */
  protected onStarClicked(rating: number): void {
    //fire onClick event
    if (!this.interactionPossible()) {
      return;
    }

    this.rating = rating;

    const onClickEventObject: ClickEvent = {
      rating: this.rating
    };
    this.saveOnClick(onClickEventObject);
  }
}
