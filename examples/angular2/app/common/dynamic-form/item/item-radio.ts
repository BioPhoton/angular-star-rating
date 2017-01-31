import { ItemBase } from './item-base';

export class RadioItem extends ItemBase<string> {
  controlType = 'radio';
  type="radio";
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
