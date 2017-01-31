import { ItemBase } from './item-base';

export class TextboxItem extends ItemBase<string> {
  placeholder?:string;
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.placeholder = options['placeholder'];
    this.type = options['type'] || '';
  }
}
