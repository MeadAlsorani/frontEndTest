import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/interfaces/customer';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customerEdit',
  templateUrl: './customerEdit.component.html',
  styleUrls: ['./customerEdit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEditForm:FormGroup;
  response:string;
  customerId:number;
  customer:Customer
  constructor(
    private route:ActivatedRoute,
    private customerService:CustomerService,
    private router:Router
  ) { }

  ngOnInit() {
    this.formInit();
    this.route.params.subscribe(data=>{
      this.customerId=data['id'];
      this.customerService.getCustomerByID(this.customerId).subscribe(cust=>{
        this.customer=cust;
        this.formSetters();
      })
    })
  }
  formInit(){
    this.customerEditForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      surName:new FormControl(null,Validators.required),
      phoneNumber:new FormControl(null,Validators.required),
      picture:new FormControl(null)
    });
  }
  uploadFinished(event){
    this.response = event;
  }
  onEdit(data:Customer){
    data.id=this.customerId;
    this.response!=null ? data.picture=this.response : data.picture=this.customer.picture;
    this.customerService.editCustomer(data,this.customerId).subscribe(()=>{
      alert("customer edited successfuly");
      this.router.navigate(['/customerList']);
    });
  }


  formSetters(){
    this.name.setValue(this.customer.name);
    this.surName.setValue(this.customer.surName);
    this.phoneNumber.setValue(this.customer.phoneNumber);
  }

  //#region Form getters
  get name(){
    return this.customerEditForm.get('name') as FormControl;
  }

  get surName(){
    return this.customerEditForm.get('surName') as FormControl;
  }

  get phoneNumber(){
    return this.customerEditForm.get('phoneNumber') as FormControl;
  }

  //#endregion


}
