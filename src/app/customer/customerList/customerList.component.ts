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
    this.custumerService.getCustomers().subscribe(data=>{
      this.customers=data;
    });
  }

}
