import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interfaces/customer';
import { AddressService } from 'src/services/address.service';
import {CustomerService} from '../../../services/customer.service';
@Component({
  selector: 'app-customerList',
  templateUrl: './customerList.component.html',
  styleUrls: ['./customerList.component.css']
})
export class CustomerListComponent implements OnInit {
customers:Array<Customer>;
  constructor(
    private custumerService:CustomerService,
    private addressService:AddressService
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
      this.custumerService.deleteCustomer(id).subscribe((data)=>{
        alert("user deleted successfuly..!");
        if (data.addresses.length>0) {
          for(let i=0;i<data.addresses.length;i++){
            this.addressService.deleteAddress(data.addresses[i].id).subscribe();
          }
        }
        this.fetchCustomer();
      })
    }
  }

}
