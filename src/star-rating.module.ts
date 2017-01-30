import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from "./star-rating.component";
import { StarRatingConfig } from "./star-rating-config"

export{ StarRatingComponent} from "./star-rating.component";
export { StarRatingConfig } from "./star-rating-config"

const EXPORTS = [ StarRatingComponent ];

@NgModule({
  imports: [ CommonModule ],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ StarRatingConfig ]
})
export class StarRatingModule {

}
