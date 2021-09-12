import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoginEvent} from "../../components/login/login.interface";

@Component({
  selector: 'cos-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

  login(value: LoginEvent): void {
  }
}
