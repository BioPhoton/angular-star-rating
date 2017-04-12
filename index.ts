import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {starRatingDirection, starRatingColor, starRatingPosition, starRatingSizes, starRatingSpeed, starRatingStarSpace, starRatingStarTypes} from './src/star-rating-struct';
import { StarRatingComponent } from './src/star-rating.component';
import  { StarRatingConfig } from './src/star-rating-config';

export * from './src/star-rating-struct';
export * from './src/star-rating.component';
export * from './src/star-rating-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarRatingComponent
  ],
  exports: [
    StarRatingComponent
  ]
})
export class StarRatingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StarRatingModule,
      providers: [StarRatingConfig]
    };
  }
}
