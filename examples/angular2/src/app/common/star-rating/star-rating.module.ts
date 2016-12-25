import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from "./star-rating.component";

export{ StarRatingComponent} from "./star-rating.component";

const EXPORTS = [StarRatingComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ]
})
export class StarRatingModule { }
