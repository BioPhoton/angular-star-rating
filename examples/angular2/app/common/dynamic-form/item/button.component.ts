import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { ItemBase }     from './item-base';
@Component({
  moduleId: module.id,
  selector: 'df-button',
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  @Input() item: ItemBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.item.key].valid; }
}
