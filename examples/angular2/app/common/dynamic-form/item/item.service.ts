import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ItemBase } from './item-base';

@Injectable()
export class ItemControlService {
  constructor() { }

    toFormGroup(items: ItemBase<any>[] ) {
      let group: any = {};

    items.forEach(item => {
      group[item.key] = item.required ? new FormControl(item.value || '', Validators.required)
        : new FormControl(item.value || '');
    });
    return new FormGroup(group);
  }
}
