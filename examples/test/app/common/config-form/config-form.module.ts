import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigFormComponent } from "./config-form.component";
import { ConfigFormConfig } from "./config-form-config"

export{ ConfigFormComponent} from "./config-form.component";
export { ConfigFormConfig } from "./config-form-config"

const EXPORTS = [ ConfigFormComponent ];

@NgModule({
  imports: [ CommonModule ],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ConfigFormConfig ]
})
export class ConfigFormModule { }
