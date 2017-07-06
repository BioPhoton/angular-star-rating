import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {StarRatingModule} from "angular-star-rating";
import {AppComponent} from "./app.component";
import {FormTestComponent} from "./components/form-test/form-test.component";
import {MyFormComponent} from "./components/my-form-component-minimal/form-test.component";
import {MyEventsComponent} from "./components/my-events/my-events.component";
import {MyConfigComponent} from "app/components/my-config/my-config.component";
import {StarRatingConfig} from "angular-star-rating/dist/src/star-rating-config";



@NgModule({
    declarations: [
        AppComponent,
        FormTestComponent,
        MyFormComponent,
        MyEventsComponent,
        MyConfigComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StarRatingModule,
        ReactiveFormsModule,
    ],
    providers: [
        {provide: StarRatingConfig, useValue:{}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
