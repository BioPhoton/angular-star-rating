import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {StarRatingModule} from "angular-star-rating";
import {AppComponent} from "./app.component";
import {FormTestComponent} from "./components/form-test/form-test.component";
import {StockCounterComponent} from "./components/stock-counter/stock-counter.component";
import {MyFormComponent} from "./components/my-form-component-minimal/form-test.component";
import {MyEventsComponent} from "./components/my-events/my-events.component";


@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    MyFormComponent,
      MyEventsComponent,
    StockCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StarRatingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
