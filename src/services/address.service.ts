import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Address } from '../interfaces/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
addressApiUrl=environment.apiUrl+"addresses/";
constructor(
  private http:HttpClient
) { }

public getAddresses():Observable<Address[]>{
  return this.http.get<Address[]>(this.addressApiUrl)
}

public getAddressById(id:number):Observable<Address>{
  return this.http.get<Address>(`${this.addressApiUrl}${id}`)
}
public addAddress(Address:Address):Observable<Address>{
  return this.http.post<Address>(this.addressApiUrl,Address);
}

public editAddress(Address:Address,id:number):Observable<Address>{
  return this.http.put<Address>(`${this.addressApiUrl}${id}`,Address);
}

public deleteAddress(id:number):Observable<Address>{
  return this.http.delete<Address>(`${this.addressApiUrl}${id}`);
}

}
