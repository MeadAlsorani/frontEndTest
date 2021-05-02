import { Customer } from './customer';

export interface Address {
  id: number;
  city: string;
  district: string;
  street: string;
  zipCode: string;
  buildingNo: string;
  doorNo: string;
  costumerId: number;
  costumer: Customer;
}
