import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormQuestionComponent } from './item/item.component';

export{ DynamicFormComponent} from "./dynamic-form.component";

const EXPORTS = [ DynamicFormComponent, DynamicFormQuestionComponent ];

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
  providers: [ ]
})
export class DynamicFormModule { }
