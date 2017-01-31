import {Component, Input, OnInit, Output}  from '@angular/core';
import {EventEmitter} from "@angular/common";
import { FormGroup }                 from '@angular/forms';
import { ItemBase }              from './item/item-base';
import { ItemControlService }    from './item/item-control.service';
import {IDynamicFormOnPayLoadChangeEvent} from "./dynamic-form-scruct";

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ ItemControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: ItemBase<any>[] = [];
  form: FormGroup;

  /*
  @Output()
  onPayloadChange:EventEmitter<IDynamicFormOnPayLoadChangeEvent> = new EventEmitter<IDynamicFormOnPayLoadChangeEvent>();
  */

  payLoad = '';

  constructor(private ics: ItemControlService) {  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.questions);
  }

  onSubmit($event) {

    this.payLoad = JSON.stringify(this.form.value);
    let onPayloadChangeEvvent:IDynamicFormOnPayLoadChangeEvent = {payLoad: this.payLoad};
    //  this.onPayloadChange.emit(onPayloadChangeEvent);
  }

}
