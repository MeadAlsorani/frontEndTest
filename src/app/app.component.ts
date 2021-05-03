import { Component } from '@angular/core';
import { UserAccountService } from 'src/services/userAccount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEndTest';
  islogged:boolean;
  constructor(
    private userservice:UserAccountService
  ) {
    this.islogged=this.userservice.isLogged();
  }
}
