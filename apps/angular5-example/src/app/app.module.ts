import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {StarRatingModule} from 'angular-star-rating';
import {AppComponent} from './app.component';
import {FormTestComponent} from './components/form-test/form-test.component';
import {MyFormComponent} from './components/my-form-component-minimal/form-test.component';
import {MyEventsComponent} from './components/my-events/my-events.component';
import {RouterModule} from '@angular/router';
import {BindingsConfigFormComponent} from './components/bindings-config-form/bindings-config-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    MyFormComponent,
    MyEventsComponent,
    BindingsConfigFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path:'',
          redirectTo: 'form',
          pathMatch: 'full'
        },
        {
          path:'kitchensink',
          component: BindingsConfigFormComponent
        },
        {
          path:'events',
          component: MyEventsComponent
        },
        {
          path:'form',
          component: MyFormComponent
        },
        {
          path:'**',
          redirectTo: 'form'
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
