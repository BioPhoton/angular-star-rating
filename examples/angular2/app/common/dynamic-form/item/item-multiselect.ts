import { ItemBase } from './item-base';

export class MultiselectItem extends ItemBase<string> {
  controlType = 'multiselect';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
