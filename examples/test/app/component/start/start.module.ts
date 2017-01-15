import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from "./start.component";
import {ConfigFormModule} from "../../common/config-form/config-form.module";
import {StarRatingModule} from "../../common/star-rating/star-rating.module";


export{ StartComponent} from "./start.component";

const EXPORTS = [ StartComponent ];

@NgModule({
  imports: [ CommonModule, ConfigFormModule, StarRatingModule],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ]
})
export class StartModule { }
