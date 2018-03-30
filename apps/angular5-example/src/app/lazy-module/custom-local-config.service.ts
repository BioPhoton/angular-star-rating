import { Injectable } from '@angular/core';
import {StarRatingConfigService} from '@angular-star-rating-lib/angular-star-rating';

@Injectable()
export class CustomLocalConfigService extends StarRatingConfigService {

  constructor() {
    super();
    this.size = 'small';
  }
}
