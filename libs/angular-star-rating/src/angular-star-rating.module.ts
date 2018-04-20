import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {StarRatingControlComponent} from './components/star-rating-control/star-rating-control.component';
import {StarRatingConfigService} from './services/star-rating-config.service';

const DECLARATIONS = [
  StarRatingComponent,
  StarRatingControlComponent
];
const EXPORTS = [DECLARATIONS];

@NgModule({
  imports: [CommonModule],
  declarations: [DECLARATIONS],
  exports: [EXPORTS]
})
export class StarRatingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StarRatingModule,
      providers: [
        StarRatingConfigService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: StarRatingModule,
      providers: []
    };
  }
}
