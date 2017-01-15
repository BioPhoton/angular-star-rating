import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from "./start.component";
import {ConfigFormModule} from "../../common/config-form/config-form.module";


export{ StartComponent} from "./start.component";

const EXPORTS = [ StartComponent ];

@NgModule({
  imports: [ CommonModule, ConfigFormModule],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ]
})
export class StartModule { }
