import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customerAdd',
  templateUrl: './customerAdd.component.html',
  styleUrls: ['./customerAdd.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerAddForm:FormGroup;
  response:string;
  constructor(
    private custumerService:CustomerService,
    private router:Router
  ) { }

  ngOnInit() {
    this.formInit()
  }

  formInit(){
    this.customerAddForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      surName:new FormControl(null,Validators.required),
      phoneNumber:new FormControl(null,Validators.required),
      picture:new FormControl(null),
      addresses:new FormControl(null)
    });
  }
  uploadFinished(event) {
    this.response = event;
  }
  onAdd(event){
    this.custumerService.addCustomer(event).subscribe(
      ()=>{
        alert("customer Added..");
        this.router.navigate(["/customerList"]);
      }
    )
  }
}
