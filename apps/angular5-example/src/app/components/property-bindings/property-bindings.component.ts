import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ClickEvent,
  HoverRatingChangeEvent,
  RatingChangeEvent
} from '@angular-star-rating-lib/angular-star-rating';
import {
  starRatingColor,
  starRatingLabelPosition,
  starRatingSizes,
  starRatingSpeed,
  starRatingStarSpace,
  starRatingStarTypes
} from '@angular-star-rating-lib/angular-star-rating/src/interfaces/star-rating-config.interface';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'property-bindings',
  template: `
  <star-rating-comp
      [id]="42"
      [rating]="3"
      [step]="0.5"
      [showHalfStars]="true"
      [numOfStars]="8"
      [size]="'large'"
      [space]="'around'"
      [staticColor]="'positive'"
      [disabled]="false"
      [hoverEnabled]="true"
      [starType]="'svg'"
      [labelText]="'rate me'"
      [labelPosition]="right"
      [speed]="'slow'"
      [direction]="'ltr'"
      [readOnly]="false"
    ></star-rating-comp>
  `
})
export class PropertyBindingsComponent {}
