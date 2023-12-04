/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ClickEvent } from '../../interfaces/click-event.interface';
import { HoverRatingChangeEvent } from '../../interfaces/hover-rating-change-event.interface';
import { RatingChangeEvent } from '../../interfaces/rating-change-event.interface';
import { StarRating } from '../../services/star-rating';
import { StarRatingConfigService } from '../../services/star-rating-config.service';
import { StarRatingUtils } from '../../services/star-rating.utils';

const STAR_RATING_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StarRatingControlComponent),
  multi: true
};

@Component({
  selector: 'star-rating-control',
  standalone: true,
  providers: [STAR_RATING_CONTROL_ACCESSOR],
  templateUrl: 'star-rating-control.component.html'
})
export class StarRatingControlComponent
  extends StarRating
  implements ControlValueAccessor {
  @Output()
  public starClickChange: EventEmitter<ClickEvent> = new EventEmitter<ClickEvent>();

  @Output()
  public ratingChange: EventEmitter<RatingChangeEvent> = new EventEmitter<RatingChangeEvent>();

  @Output()
  public hoverRatingChange: EventEmitter<HoverRatingChangeEvent> = new EventEmitter<HoverRatingChangeEvent>();

  // eslint-disable-next-line @typescript-eslint/ban-types
  private onTouch: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private onModelChange: Function;
  private onModelChangeRegistered = false;
  private onTouchRegistered = false;

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

  protected saveOnTouch() {
    if (this.onTouchRegistered) {
      this.onTouch();
    }
  }

  protected saveOnModelChange(value: number) {
    if (this.onModelChangeRegistered) {
      this.onModelChange(value);
    }
  }

  /**ACCESSIBILITY **/

  //Keyboard events
  protected onKeyDown(event: KeyboardEvent) {
    if (!this.interactionPossible()) {
      return;
    }

    const handlers: any = {
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

    this.saveOnTouch();
  }

  //Focus events
  protected onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }

  protected onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }

  //Hover events
  protected onStarHover(rating?: number): void {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }

    this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;

    //fire onHoverRatingChange event
    const $event: HoverRatingChangeEvent = { hoverRating: this.hoverRating };
    this.saveOnHover($event);
  }

  /**Form Control - ControlValueAccessor implementation**/

  public writeValue(obj: any): void {
    this.rating = obj;
  }

  public registerOnChange(fn: any): void {
    this.onModelChange = fn;
    this.onModelChangeRegistered = true;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
    this.onTouchRegistered = true;
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

      this.saveOnModelChange(this.rating);
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
