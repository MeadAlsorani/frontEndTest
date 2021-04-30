import { Customer } from './customer';

export interface Address {
  id: number;
  city: string;
  dirstrict: string;
  street: string;
  zipCode: string;
  buildingNo: string;
  doorNo: string;
  costumerId: number;
  costumer: Customer;
}
