import {Component, Input, OnInit, Output}  from '@angular/core';
import {FormGroup}                 from '@angular/forms';
import {ItemBase}              from './item/item-base';
import {ItemControlService}    from './item/item.service';
import {IDynamicFormOnPayLoadChangeEvent} from "./dynamic-form-scruct";

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ItemControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() items: ItemBase<any>[] = [];
  form: FormGroup;

  /*
   @Output()
   onPayloadChange:EventEmitter<IDynamicFormOnPayLoadChangeEvent> = new EventEmitter<IDynamicFormOnPayLoadChangeEvent>();
   */

  payLoad: any;

  constructor(private ics: ItemControlService) {
  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.items);
  }

  onSubmit($event: IDynamicFormOnPayLoadChangeEvent) {

    this.payLoad = JSON.stringify(this.form.value);
    let onPayloadChangeEvent: IDynamicFormOnPayLoadChangeEvent = {payLoad: this.payLoad};
    //  this.onPayloadChange.emit(onPayloadChangeEvent);
  }

}
