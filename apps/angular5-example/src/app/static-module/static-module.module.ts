import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomConfigComponent } from './custom-config/custom-config.component';
import { CustomLocalConfigComponent } from './custom-local-config/custom-local-config.component';
import {RouterModule} from '@angular/router';
import {StarRatingModule} from '@angular-star-rating-lib/angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forChild(),
    RouterModule.forChild([
      {
        path: 'static-config-override',
        component: CustomConfigComponent
      }
    ])
  ],
  declarations: [
    CustomConfigComponent,
    CustomLocalConfigComponent
  ]
})
export class StaticModuleModule { }
