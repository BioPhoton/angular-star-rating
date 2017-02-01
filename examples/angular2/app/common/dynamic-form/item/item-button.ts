import { ItemBase } from './item-base';

export class ButtonItem extends ItemBase<string> {
  controlType = 'button';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'submit';
  }
}
