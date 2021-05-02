import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Address } from 'src/interfaces/address';
import { Customer } from 'src/interfaces/customer';
import { AddressService } from 'src/services/address.service';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customerAdd',
  templateUrl: './customerAdd.component.html',
  styleUrls: ['./customerAdd.component.css']
})
export class CustomerAddComponent implements OnInit {
  customerAddForm:FormGroup;
  response:string;
  addresses:Array<Address>=[];
  @ViewChild('city') cityInp:ElementRef;
  @ViewChild('buildingNo') buildingNoInp:ElementRef;
  @ViewChild('district') districtInp:ElementRef;
  @ViewChild('doorNo') doorNoInp:ElementRef;
  @ViewChild('street') streetInp:ElementRef;
  @ViewChild('zipCode') zipCodeInp:ElementRef;
  constructor(
    private custumerService:CustomerService,
    private router:Router,
    private addressService:AddressService
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(){
    this.customerAddForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      surName:new FormControl(null,Validators.required),
      phoneNumber:new FormControl(null,Validators.required),
      picture:new FormControl(null)
    });
  }
  uploadFinished(event) {
    this.response = event;
  }
  onAdd(event:Customer){
    if (this.response) {
      event.picture=this.response;
    }
    this.custumerService.addCustomer(event).subscribe(
      (customer)=>{
        for(let i=0;i<this.addresses.length;i++){
          this.addresses[i].id=0;
          this.addresses[i].costumerId=customer.id;
          this.addressService.addAddress(this.addresses[i]).subscribe();
        }
        alert("customer Added..");
        this.router.navigate(["/customerList"]);
      }
    )
  }

  AddAddress(){
    this.addresses.push({
      city:this.cityInp.nativeElement.value,
      buildingNo:this.buildingNoInp.nativeElement.value,
      district:this.districtInp.nativeElement.value,
      doorNo:this.doorNoInp.nativeElement.value,
      street:this.streetInp.nativeElement.value,
      zipCode:this.zipCodeInp.nativeElement.value,
      costumer:null,
      costumerId:null,
      id:null
    });
    this.clearAddress();
  }

  clearAddress(){
    this.cityInp.nativeElement.value=null;
    this.buildingNoInp.nativeElement.value=null;
    this.districtInp.nativeElement.value=null;
    this.doorNoInp.nativeElement.value=null;
    this.streetInp.nativeElement.value=null;
    this.zipCodeInp.nativeElement.value=null;
  }
}
