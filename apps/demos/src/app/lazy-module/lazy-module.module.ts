import {
  StarRatingModule,
  StarRatingConfigService,
} from '@angular-star-rating-lib/angular-star-rating';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomConfigComponent } from './custom-config.component';
import { CustomLocalConfigComponent } from './custom-local-config.component';
import { CustomConfigService } from './custom-config.service';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: CustomConfigComponent,
      },
    ]),
  ],
  declarations: [CustomConfigComponent, CustomLocalConfigComponent],
  providers: [
    {
      provide: StarRatingConfigService,
      useClass: CustomConfigService,
    },
  ],
})
export class LazyModuleModule {}
