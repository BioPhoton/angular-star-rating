import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from "./dynamic-form.component";
import { ItemComponent } from './item/item.component';
import {ButtonComponent} from "./item/button.component";

export{ DynamicFormComponent} from "./dynamic-form.component";

const EXPORTS = [ DynamicFormComponent, ItemComponent, ButtonComponent ];

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ]
})
export class DynamicFormModule { }
