import { ItemBase } from './item-base';

export class MultiselectQuestion extends ItemBase<string> {
  controlType = 'multiselect';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
