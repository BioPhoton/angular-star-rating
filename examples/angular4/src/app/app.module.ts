import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {StarRatingModule} from 'angular-star-rating'
import {FormTestComponent} from "./components/form-test/form-test.component";
import {MyFormComponent} from "./components/my-form-component-minimal/form-test.component";
import {MyEventsComponent} from "./components/my-events/my-events.component";
import {MyConfigComponent} from "app/components/my-config/my-config.component";
import { BindingsConfigFormComponent } from './components/bindings-config-form/bindings-config-form.component';





@NgModule({
    declarations: [
        AppComponent,
        FormTestComponent,
        MyFormComponent,
        MyEventsComponent,
        MyConfigComponent,
        BindingsConfigFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StarRatingModule.forRoot(),
        ReactiveFormsModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
