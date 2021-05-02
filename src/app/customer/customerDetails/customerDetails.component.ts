import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/interfaces/customer';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customerDetails',
  templateUrl: './customerDetails.component.html',
  styleUrls: ['./customerDetails.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerId:number;
  customer:Customer;
  imagesUrl:string=environment.imageUrl;
  constructor(
    private route:ActivatedRoute,
    private customerService:CustomerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.customerId=param['id'];
      this.customerService.getCustomerByID(this.customerId).subscribe(cus=>{
        this.customer=cus;
      })
    })
  }


}
