export class ItemBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  //placeholder:string;
  controlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    //placeholder?:string;
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    //this.placeholder = options.placeholder || '';
    this.controlType = options.controlType || '';
  }
}
