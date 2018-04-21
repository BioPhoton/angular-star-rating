import { StarRatingModule } from '@angular-star-rating-lib/angular-star-rating';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AppComponent } from './app.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';
import { FormControlStarRatingComponent } from './components/form-control-star-rating/form-control-star-rating.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';
import { StaticModuleModule } from './static-module/static-module.module';
import { CustomStyleComponent } from './components/custom-style/custom-style.component';
import { CustomStarsComponent } from './components/custom-stars/custom-stars.component';

const DECLARATIONS = [
  AppComponent,
  PropertyBindingsComponent,
  EventBindingsComponent,
  FormControlStarRatingComponent,
  CustomStyleComponent,
  CustomStarsComponent
];
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    NxModule.forRoot(),
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    StaticModuleModule,
    RouterModule.forRoot(
      [
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
        {
          path: 'custom-style',
          component: CustomStyleComponent
        },
        {
          path: 'custom-stars',
          component: CustomStarsComponent
        },
        // static-config-override routes in its module
        {
          path: 'lazy-config-override',
          loadChildren:
            'apps/angular5-example/src/app/lazy-module/lazy-module.module#LazyModuleModule'
        },
        {
          path: '**',
          redirectTo: 'property-bindings'
        }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [DECLARATIONS],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
