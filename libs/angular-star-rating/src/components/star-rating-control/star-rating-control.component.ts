import {Component, EventEmitter, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ClickEvent} from '../../interfaces/click-event.interface';
import {HoverRatingChangeEvent} from '../../interfaces/hover-rating-change-event.interface';
import {RatingChangeEvent} from '../../interfaces/rating-change-event.interface';
import {StarRating} from '../../services/star-rating';
import {StarRatingConfigService} from '../../services/star-rating-config.service';
import {StarRatingUtils} from '../../services/star-rating.utils';

const STAR_RATING_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StarRatingControlComponent),
  multi: true
};

@Component({
  selector: 'star-rating-control',
  providers: [STAR_RATING_CONTROL_ACCESSOR],
  inputs: [
    'getHalfStarVisible',
    'getColor',
    'showHalfStars',
    'hoverEnabled',
    'rating',
    'step',
    'disabled',
    'readOnly',
    'space',
    'starType',
    'size',
    'speed',
    'numOfStars',
    'direction',
    'staticColor',
    //, 'labelVisible'
    'labelPosition',
    'labelText',
    'id'
  ],
  outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
  styleUrls: [],
  templateUrl: 'star-rating-control.component.html'
})
export class StarRatingControlComponent extends StarRating
  implements ControlValueAccessor {
  //Outputs
  ///////////////////////////////////////////////////////////////////////////////////////////

  starClickChange: EventEmitter<ClickEvent> = new EventEmitter<ClickEvent>();

  ratingChange: EventEmitter<RatingChangeEvent> = new EventEmitter<
    RatingChangeEvent
  >();

  hoverRatingChange: EventEmitter<HoverRatingChangeEvent> = new EventEmitter<
    HoverRatingChangeEvent
  >();

  onTouch: Function;
  onModelChange: Function;
  private onModelChangeRegistered = false;
  private onTouchRegistered = false;

  saveOnClick($event: ClickEvent) {
    if (this.starClickChange) {
      this.starClickChange.emit($event);
    }
  }

  saveOnRatingChange($event: RatingChangeEvent) {
    if (this.ratingChange) {
      this.ratingChange.emit($event);
    }
  }

  saveOnHover($event: HoverRatingChangeEvent) {
    if (this.hoverRatingChange) {
      this.hoverRatingChange.emit($event);
    }
  }

  saveOnTouch() {
    if (this.onTouchRegistered) {
      this.onTouch();
    }
  }

  saveOnModelChange(value: number) {
    if (this.onModelChangeRegistered) {
      this.onModelChange(value);
    }
  }

  /**ACCESSIBILITY **/

  //Keyboard events
  onKeyDown(event: KeyboardEvent) {
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
        eventCode.substr(dStr.length, eventCode.length - 1), 10
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
  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.saveOnTouch();
  }

  //Hover events
  onStarHover(rating?: number): void {
    if (!this.interactionPossible() || !this.hoverEnabled) {
      return;
    }

    this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;

    //fire onHoverRatingChange event
    const $event: HoverRatingChangeEvent = { hoverRating: this.hoverRating };
    this.saveOnHover($event);
  }

  /**Form Control - ControlValueAccessor implementation**/

  writeValue(obj: any): void {
    this.rating = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
    this.onModelChangeRegistered = true;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
    this.onTouchRegistered = true;
  }

  constructor(config: StarRatingConfigService) {
    super(config);
  }

  //Overrides
  setRating(value: number): void {
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
  onStarClicked(rating: number): void {
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
