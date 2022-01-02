import { Injectable } from '@angular/core';
import { StarRatingConfigService } from '@angular-star-rating-lib/angular-star-rating';

@Injectable()
export class CustomIconsConfigService extends StarRatingConfigService {
  constructor() {
    super();
    this.starType = 'custom-icon';
    this.classEmpty = 'fas fa-star';
    this.classHalf = 'fas fa-user';
    this.classFilled = 'fas fa-play-circle';
  }
}
