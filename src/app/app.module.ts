import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './auth/login.guard';
import { CustomerDetailsComponent } from './customer/customerDetails/customerDetails.component';
import { CustomerAddComponent } from './customer/customerAdd/customerAdd.component';
import { CustomerEditComponent } from './customer/customerEdit/customerEdit.component';
import { CustomerListComponent } from './customer/customerList/customerList.component';
import { HomeComponent } from './home/home.component';
import { UplaodImageComponent } from './customer/customerAdd/uplaodImage/uplaodImage.component';
import { AddressListComponent } from './Address/addressList/addressList.component';
import {UserAddComponent} from './users/userAdd/userAdd.component';
import {UserEditComponent} from './users/userEdit/userEdit.component';
import {UserListComponent} from './users/userList/userList.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  {
    path: 'customerAdd',
    component: CustomerAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'customerDetails/:id',
    component: CustomerDetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'customerEdit/:id',
    component: CustomerEditComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'customerList',
    component: CustomerListComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'AddressList',
    component: AddressListComponent,
    canActivate: [LoginGuard],
  },{
    path:'user-add',
    component:UserAddComponent,
    canActivate:[LoginGuard]
  },{
    path:'user-edit/:id',
    component:UserEditComponent,
    canActivate:[LoginGuard]
  },{
    path:'user-List',
    component:UserListComponent,
    canActivate:[LoginGuard]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    HomeComponent,
    UplaodImageComponent,
    AddressListComponent,
    CustomerDetailsComponent,
    UserEditComponent,
    UserAddComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
