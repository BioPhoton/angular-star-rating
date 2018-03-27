import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import {StarRatingModule} from '@angular-star-rating-workspace/angular-star-rating'

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), StarRatingModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
