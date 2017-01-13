import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import {StarRatingModule} from "angular-star-rating/src/star-rating.module";
//import { StarRatingBindingsFormComponent } from './common/star-rating-bindings-form/star-rating-bindings-form.component';

@NgModule({
  declarations: [
      AppComponent,
      //StarRatingBindingsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
