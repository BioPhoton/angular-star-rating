import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from "./template-form.component";

const EXPORTS = [ TemplateFormComponent ];

@NgModule({
  imports: [ CommonModule , FormsModule],
  exports:      [ EXPORTS ],
  declarations: [ EXPORTS ],
})
export class TemplateFormModule {

}
