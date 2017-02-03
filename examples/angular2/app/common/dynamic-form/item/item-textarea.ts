import { ItemBase } from './item-base';

export class TextareaItem extends ItemBase<string> {
  controlType = 'textarea';

  constructor(options: {} = {}) {
    super(options);
  }
}
