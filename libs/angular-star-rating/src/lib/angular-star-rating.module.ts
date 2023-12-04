import { ModuleWithProviders, NgModule } from '@angular/core';

import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { StarRatingControlComponent } from './components/star-rating-control/star-rating-control.component';
import { StarRatingConfigService } from './services/star-rating-config.service';

const DECLARATIONS = [StarRatingComponent, StarRatingControlComponent];
const EXPORTS = [DECLARATIONS];

@NgModule({
  imports: DECLARATIONS,
  exports: [EXPORTS],
})
export class StarRatingModule {
  public static forRoot(): ModuleWithProviders<StarRatingModule> {
    return {
      ngModule: StarRatingModule,
      providers: [StarRatingConfigService],
    };
  }

  public static forChild(): ModuleWithProviders<StarRatingModule> {
    return {
      ngModule: StarRatingModule,
      providers: [],
    };
  }
}
