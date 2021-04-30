import {Address} from './address';

export interface Customer {
  id:number,
  name:string,
  surName:string,
  phoneNumber:string,
  addresses:Address[],
  picture:string
}
