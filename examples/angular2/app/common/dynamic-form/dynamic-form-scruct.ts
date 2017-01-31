import {ItemBase} from "./item/item-base";
import {EventEmitter} from "@angular/common";


export interface IDynamicFormOnPayLoadChangeEvent {
  //@TODO Implement a type
  payLoad;
}

export interface IDynamicFormBindings{
  questions: ItemBase<any>[];
  onPayloadChange:EventEmitter<IDynamicFormOnPayLoadChangeEvent>;

}
