import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccounts } from 'src/interfaces/userAccounts';
import { UserAccountService } from 'src/services/userAccount.service';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  userAccounts:UserAccounts[];
  constructor(
    private userService:UserAccountService,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.userAccounts=data;
    })
  }

  deleteUser(id){
    if (confirm("Please confirm deleting...")) {
      this.userService.deleteUser(id).subscribe(()=>{
        alert("User Deleted...");
        this.fetchUsers();
      })
    }
  }
}
