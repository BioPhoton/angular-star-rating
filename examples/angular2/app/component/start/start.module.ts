import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from "./start.component";

import {StarRatingModule} from "../../common/star-rating/star-rating.module";
import {DynamicFormModule} from "../../common/dynamic-form/dynamic-form.module";
import {ItemService} from "./item.service";


export{ StartComponent} from "./start.component";

const EXPORTS = [ StartComponent ];

@NgModule({
  imports: [ CommonModule, StarRatingModule, DynamicFormModule],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ItemService]
})
export class StartModule { }
