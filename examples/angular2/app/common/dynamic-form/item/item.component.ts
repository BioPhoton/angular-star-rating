import {Component, Input} from '@angular/core';
import {FormGroup}        from '@angular/forms';
import {ItemBase}     from './item-base';
@Component({
  moduleId: module.id,
  selector: 'df-item',
  templateUrl: 'item.component.html',
})
export class ItemComponent {
  @Input() item: ItemBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.item.key].valid;
  }

  getWrapperClass(): string {
    let classNames: string = "";
    if (this.item.controlType === 'radio' || this.item.controlType === 'checkbox') {
      classNames = 'form-check';
    }
    else {
      classNames = 'form-group';
    }

    return classNames;
  }

  isLabelVisible():boolean {
    return !!this.item.label;
  }

  isControlTypeVisible(controlType:string):boolean {
    return this.item.controlType === controlType;
  }

  getControlClass():string {
    let classNames: string = "";
    if (this.item.controlType === 'radio' || this.item.controlType === 'checkbox') {
      classNames = 'form-check-input';
    }
    else {
      classNames = 'form-control';
    }
    return classNames;
  }


}
