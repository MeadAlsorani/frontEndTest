import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { UserAccounts } from '../interfaces/userAccounts';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
userApiUrl=environment.apiUrl+"userAccounts/";
constructor(
  private http:HttpClient
) { }

public login(email:string,password:string):Observable<UserAccounts>{
  return this.http.post<UserAccounts>(this.userApiUrl+"Login",{
    email,
    password
  });
}

public isLogged():boolean{
  const token=localStorage.getItem("testToken");
  console.log(token);

  if (token) {
    return true;
  }
  else{
    return false;
  }
}

}
