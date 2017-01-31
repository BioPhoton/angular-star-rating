import { ItemBase } from './item-base';

export class CheckboxItem extends ItemBase<string> {
  controlType = 'checkbox';
  type = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }

}
