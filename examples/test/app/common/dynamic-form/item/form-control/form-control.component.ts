import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import {ItemBase} from "../item-base";

@Component({
  moduleId: module.id,
  selector: 'df-form-control',
  templateUrl: 'form-control.component.html'
})
export class DynamicFormFormControlComponent {
  @Input() question: ItemBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
