import { ItemBase } from './item-base';

export class CheckboxItem extends ItemBase<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
  }

}
