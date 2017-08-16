
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyFormComponent} from './components/my-form-component-minimal/form-test.component';
import {BindingsConfigFormComponent} from './components/bindings-config-form/bindings-config-form.component';
import {MyEventsComponent} from './components/my-events/my-events.component';
import {MyConfigComponent} from './components/my-config/my-config.component';


const routes: Routes = [
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
    path:'config',
    component: MyConfigComponent
  },
  {
    path:'**',
    redirectTo: 'form'
  }
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}