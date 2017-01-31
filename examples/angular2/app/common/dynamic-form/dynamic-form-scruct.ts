import {ItemBase} from "./item/item-base";


export interface IDynamicFormOnPayLoadChangeEvent {
  //@TODO Implement a type
  payLoad:{};
}

export interface IDynamicFormBindings{
  questions: ItemBase<any>[];
  onPayloadChange:any;
}
