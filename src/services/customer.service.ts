import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
customerApi=environment.apiUrl+"costumers/";
constructor(
  private http:HttpClient
) { }

public getCustomers():Observable<Customer[]>{
  return this.http.get<Customer[]>(this.customerApi)
}

public getCustomerByID(id:number):Observable<Customer>{
  return this.http.get<Customer>(`${this.customerApi}${id}`);
}
public addCustomer(customer:Customer):Observable<Customer>{
  return this.http.post<Customer>(this.customerApi,customer);
}

public editCustomer(customer:Customer,id:number):Observable<Customer>{
  return this.http.put<Customer>(`${this.customerApi}${id}`,customer);
}

public deleteCustomer(id:number):Observable<Customer>{
  return this.http.delete<Customer>(`${this.customerApi}${id}`);
}


}
