import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { ItemBase }              from './item/item-base';
import { ItemControlService }    from './item/item-control.service';
@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ ItemControlService ]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: ItemBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private ics: ItemControlService) {  }

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
