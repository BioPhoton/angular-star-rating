export interface IItemBaseOptions {
  <T>(value?:T):T;
  className?:string;
  key?: string,
  label?: string,
  required?: boolean,
  order?: number,
  controlType?: string
}
