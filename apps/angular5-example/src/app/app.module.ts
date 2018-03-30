import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarRatingModule } from '@angular-star-rating-lib/angular-star-rating';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { KitchensinkComponent } from './components/kitchensink/kitchensink.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';
import { FormControlStarRatingComponent } from './components/form-control-star-rating/form-control-star-rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaticModuleModule } from './static-module/static-module.module';

const DECLARATIONS = [
  AppComponent,
  PropertyBindingsComponent,
  EventBindingsComponent,
  FormControlStarRatingComponent,
  KitchensinkComponent
];
@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    StaticModuleModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
      },
      {
        path: 'property-bindings',
        component: PropertyBindingsComponent
      },
      {
        path: 'event-bindings',
        component: EventBindingsComponent
      },
      {
        path: 'form-control',
        component: FormControlStarRatingComponent
      },
      // static-config-override routes in its module
      {
        path: 'lazy-config-override',
        loadChildren:
          'apps/angular5-example/src/app/lazy-module/lazy-module.module#LazyModuleModule'
      },
      {
        path: 'kitchensink',
        component: KitchensinkComponent
      },
      {
        path: '**',
        redirectTo: 'kitchensink'
      }
    ])
  ],
  declarations: [DECLARATIONS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
