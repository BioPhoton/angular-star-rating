import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StarRatingModule} from '@angular-star-rating-lib/angular-star-rating';
import { CustomConfigComponent } from './custom-config/custom-config.component';
import { CustomLocalConfigComponent } from './custom-local-config/custom-local-config.component';
import {RouterModule} from '@angular/router';

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
export class LazyModuleModule { }
