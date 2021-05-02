import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interfaces/customer';
import {CustomerService} from '../../../services/customer.service';
@Component({
  selector: 'app-customerList',
  templateUrl: './customerList.component.html',
  styleUrls: ['./customerList.component.css']
})
export class CustomerListComponent implements OnInit {
customers:Array<Customer>;
  constructor(
    private custumerService:CustomerService
  ) { }

  ngOnInit() {
    this.fetchCustomer();
  }
  fetchCustomer(){
    this.custumerService.getCustomers().subscribe(data=>{
      this.customers=data;
    });
  }
  onDelete(id){
    if (confirm("Are you sure to delete the user?")) {
      this.custumerService.deleteCustomer(id).subscribe(()=>{
        alert("user deleted successfuly..!");
        this.fetchCustomer();
      })
    }
  }

}
