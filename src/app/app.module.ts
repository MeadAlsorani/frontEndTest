import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './auth/login.guard';
import { CustomerAddComponent } from './customer/customerAdd/customerAdd.component';
import { CustomerEditComponent } from './customer/customerEdit/customerEdit.component';
import { CustomerListComponent } from './customer/customerList/customerList.component';
import { HomeComponent } from './home/home.component';
import { UplaodImageComponent } from './customer/customerAdd/uplaodImage/uplaodImage.component';
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
    path: 'customerEdit',
    component: CustomerEditComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'customerList',
    component: CustomerListComponent,
    canActivate: [LoginGuard],
  },
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
