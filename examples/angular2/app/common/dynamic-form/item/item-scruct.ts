export interface IItemBaseOptions {
  <T>(value?:T):T;
  className?:string;
  key?: string,
  label?: string,
  required?: boolean,
  order?: number,
  controlType?: string
}

//button checkbox color file image radio reset submit
export type textboxTypes = "text" | "number" | "email" | "tel" | "password" | "date" | "time" | "datetime-local" | "week" | "month" | "url" | "hidden" | "range" | "search";
