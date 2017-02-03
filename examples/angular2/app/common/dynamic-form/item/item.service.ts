import {Injectable}   from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ItemBase} from './item-base';
import {TextboxItem} from "./item-textbox";

@Injectable()
export class ItemControlService {

  static createFormItem(config):ItemBase<any> {

    let controlType:string = config.controlType || '';
    let item:ItemBase<any>;

    console.log('controlType: ', controlType);

    if(controlType === "textbox") {
      //@TODO edit object to valid config for type
      item = new TextboxItem(config);
    }

    return item;
  }

  constructor() {

  }

  toFormGroup(items: ItemBase<any>[], model?: {}) {
    let group: any = {};

    items
      .map(applyModelValue(model))
      .forEach((item:ItemBase<any>) => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required)
        : new FormControl(item.value || '');
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
