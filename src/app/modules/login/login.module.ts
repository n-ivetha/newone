import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { DisplayComponent } from './display/display.component';
import { FormdetailsComponent } from './formdetails/formdetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayComponent,
    FormdetailsComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
