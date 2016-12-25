import { Component } from '@angular/core';
import {StarRatingComponent} from "./common/star-rating/star-rating.module";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [StarRatingComponent]
})
export class AppComponent {
  title = 'app works!';
}
