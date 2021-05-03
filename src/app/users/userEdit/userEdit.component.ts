import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAccounts } from 'src/interfaces/userAccounts';
import { UserAccountService } from 'src/services/userAccount.service';

@Component({
  selector: 'app-userEdit',
  templateUrl: './userEdit.component.html',
  styleUrls: ['./userEdit.component.css']
})
export class UserEditComponent implements OnInit {
  userId:string;
  user:UserAccounts;
  userEditForm:FormGroup
  constructor(
    private route:ActivatedRoute,
    private userService:UserAccountService,
    private router:Router
  ) { }

  ngOnInit() {
    this.formInit();
    this.route.params.subscribe(data=>{
      this.userId=data['id'];
    });
    this.fetchUser();
  }

  formInit(){
    this.userEditForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null),
    })
  }
  fetchUser(){
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
      console.log(data);

      this.userEditForm.get('userName').setValue(data.userName);
      this.userEditForm.get('email').setValue(data.email);
    });
  }
  onUserEdit(user:UserAccounts){
    user.id=this.userId;
    this.userService.putUser(user,this.userId).subscribe(()=>{
      alert("user Modified...");
      this.router.navigate(['/user-List']);
    })
  }
}
