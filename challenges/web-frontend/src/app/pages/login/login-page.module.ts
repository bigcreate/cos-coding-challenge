import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page.component';
import {LoginPageRoutingModule} from "./login-page-routing.module";
import {LoginModule} from "../../components/login/login.module";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    LoginModule
  ]
})
export class LoginPageModule {
}
