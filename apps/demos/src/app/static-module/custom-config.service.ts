import { Injectable } from '@angular/core';
import { StarRatingConfigService } from '@angular-star-rating-lib/index';

@Injectable()
export class CustomConfigService extends StarRatingConfigService {
  constructor() {
    super();
    this.numOfStars = 9;
    this.staticColor = 'positive';
  }
}
