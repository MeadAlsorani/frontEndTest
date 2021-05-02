import { Component, OnInit } from '@angular/core';
import { Address } from '../../../interfaces/address';
import {AddressService} from '../../../services/address.service';
@Component({
  selector: 'app-addressList',
  templateUrl: './addressList.component.html',
  styleUrls: ['./addressList.component.css']
})
export class AddressListComponent implements OnInit {
  addresses:Array<Address>
  constructor(
    private addressService:AddressService
  ) { }

  ngOnInit() {
    this.fetchAddresses();
  }

  fetchAddresses(){
    this.addressService.getAddresses().subscribe(data=>{
      this.addresses=data;
      console.log(data);

    })
  }
}
