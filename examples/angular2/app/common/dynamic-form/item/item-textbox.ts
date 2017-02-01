import { ItemBase } from './item-base';
import { textboxTypes } from "./item-scruct";

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
