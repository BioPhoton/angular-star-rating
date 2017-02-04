import {Injectable}   from '@angular/core';
import {FormControl, FormGroup, Validators, ValidatorFn, AsyncValidatorFn} from '@angular/forms';

import {ItemBase} from './item-base';
import {TextboxItem} from "./item-textbox";
import {MultiselectItem} from "./item-multiselect";
import {SelectItem} from "./item-select";
import {CheckboxItem} from "./item-checkbox";
import {RadioItem} from "./item-radio";

@Injectable()
export class ItemControlService {

  static createFormItem(config):ItemBase<any> {

    let controlType:string = config.controlType || '';
    let item:ItemBase<any>;

    console.log('controlType: ', controlType);

    if(controlType === "textbox") {
      item = new TextboxItem(config);
    }

    if(controlType === "select") {
      item = new SelectItem(config);
    }

    if(controlType === "multiselect") {
      item = new MultiselectItem(config);
    }

    if(controlType === "checkbox") {
      item = new CheckboxItem(config);
    }

    if(controlType === "radio") {
      item = new RadioItem(config);
    }

    return item;
  }

  constructor() {

  }

  toFormGroup(items: ItemBase<any>[], model?: {}) {
    items = items || [];
    model = model || {};

    let group: any = {};

    items
      .map(applyModelValue(model))
      .forEach((item:ItemBase<any>) => {

        let formState: any;
        let validator: ValidatorFn | ValidatorFn[];
        let asyncValidator: AsyncValidatorFn | AsyncValidatorFn[];

        //compost validators;
        if('validators' in item) {
          validator = item.validators;
        }

        if(item.required) {
          validator = Validators.required;
        }

        group[item.key] = item.required ? new FormControl(item.value || '', Validators.required) : new FormControl(item.value || '');
    });
    return new FormGroup(group);

    ////////////

    function applyModelValue(model?: any) {
      return (item:ItemBase<any>) => {
        item.value = model[item.key];
        return item;
      }
    }

  }

}
