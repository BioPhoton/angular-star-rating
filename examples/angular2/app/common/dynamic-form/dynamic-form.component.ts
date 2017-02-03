import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges}  from '@angular/core';
import {FormGroup}                 from '@angular/forms';
import {ItemBase}              from './item/item-base';
import {ItemControlService}    from './item/item.service';
import {IDynamicFormOnPayLoadChangeEvent} from "./dynamic-form-scruct";

/*

 interface IDynamicFormComponent {
 renderForm;
 model;
 items;
 payLoad;
 onPayloadChange;
 onSave;
 }
 */
@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ItemControlService]
})
export class DynamicFormComponent implements OnInit {

  set payLoad(value: any) {
    this._payLoad = value;
    let onPayloadChangeEvent: IDynamicFormOnPayLoadChangeEvent = {payLoad: this._payLoad};
    //this.onPayloadChange.emit(onPayloadChangeEvent);
  }

  @Input() items: ItemBase<any>[] = [];
  @Input() model:{};
  form: FormGroup;

  @Output()
  onPayloadChange: EventEmitter<IDynamicFormOnPayLoadChangeEvent> = new EventEmitter<IDynamicFormOnPayLoadChangeEvent>();

  private _payLoad: any;

  constructor(private ics: ItemControlService) { }

  ngOnInit() {
    this.renderForm();
  }

  ngOnChanges(changes: SimpleChanges): void {

    let valueChanged = function (key: string, changes: SimpleChanges): boolean {
      if (key in changes) {
        if (
        changes[key].currentValue != changes[key].previousValue) {
          return true;
        }
      }
      return false;
    };

    //---------------------------------------

    if (valueChanged('model', changes)) {
      this.model = changes['model'].currentValue || {};
      this.renderForm();
    }

    if (valueChanged('items', changes)) {
      this.items = changes['items'].currentValue || [];
      this.renderForm();
    }

  }

  onSubmit($event: IDynamicFormOnPayLoadChangeEvent) {

    this.payLoad = this.form.value;
  }

  protected renderForm() {
    this.form = this.ics.toFormGroup(this.items, this.model);
    this.payLoad = this.form.value;
  }

}
