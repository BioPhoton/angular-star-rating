import {StarRatingModule} from '@angular-star-rating-lib/angular-star-rating';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomConfigComponent } from './custom-config/custom-config.component';
import { CustomLocalConfigComponent } from './custom-local-config/custom-local-config.component';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: CustomConfigComponent
      }
    ])
  ],
  declarations: [CustomConfigComponent, CustomLocalConfigComponent]
})
export class LazyModuleModule {}
