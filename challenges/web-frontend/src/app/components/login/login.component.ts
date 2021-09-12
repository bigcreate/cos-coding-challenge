import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginEvent} from "./login.interface";

type LoginForm = {
  [P in keyof LoginEvent]: FormControl;
}

@Component({
  selector: 'cos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Output() login = new EventEmitter<LoginEvent>();

  public readonly loginForm: FormGroup;

  public readonly userIdControl = new FormControl('', [Validators.required]);
  public readonly passwordControl = new FormControl('', [Validators.required]);

  constructor() {
    this.loginForm = new FormGroup(<LoginForm>{
      userId: this.userIdControl,
      password: this.passwordControl,
    });
  }

  clickOnLogin(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    // console.log(this.loginForm.value);
    this.login.emit(this.loginForm.value as LoginEvent);
  }
}
