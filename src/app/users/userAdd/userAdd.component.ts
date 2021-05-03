import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccounts } from 'src/interfaces/userAccounts';
import { UserAccountService } from 'src/services/userAccount.service';

@Component({
  selector: 'app-userAdd',
  templateUrl: './userAdd.component.html',
  styleUrls: ['./userAdd.component.css']
})
export class UserAddComponent implements OnInit {
  userAddForm:FormGroup;
  constructor(
    private userService:UserAccountService,
    private router:Router
  ) { }

  formInit(){
    this.userAddForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    });
  }
  ngOnInit() {
    this.formInit();
  }

  onUserAdd(user:UserAccounts){
    this.userService.CheckEmail(user.email).subscribe(data=>{
      if (data) {
        alert("this email has already taken, please try another one...");
      }
      else{
        this.userService.postUser(user).subscribe(()=>{
          alert("user Added successfuly..!");
          this.router.navigate(['/user-List']);
        })
      }
    });
  }
}
