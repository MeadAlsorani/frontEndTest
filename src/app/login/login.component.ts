import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/services/userAccount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string=null
  constructor(
    private auth:UserAccountService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLogin(LoginForm:NgForm){
    this.auth.login(LoginForm.value.email, LoginForm.value.password).subscribe(
      (data) => {
        localStorage.setItem('testToken', data.email);
        this.router.navigate(['/home']);
      },
      (error) => {
        if (error.status == 404) {
          this.errorMessage="email or password is incorrect..!";
        }
      }
    );
  }

}
