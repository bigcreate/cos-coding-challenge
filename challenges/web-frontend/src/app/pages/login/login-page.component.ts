import {ChangeDetectionStrategy, Component, Inject, OnDestroy} from '@angular/core';
import {LoginEvent} from "@cos/components/login/login.interface";
import {AuthService} from "@cos/services/auth.service";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {catchError, takeUntil} from "rxjs/operators";
import {isBuyer, isCustomError} from "@cos/interfaces/authData";
import {WINDOW} from "@cos/injection-tokens/global";
import {SELLER_CANT_BE_USED, SOMETHING_WRONG} from "@cos/constants/messages";
import {Router} from "@angular/router";
import {ROUTES} from "@cos/constants/routes";

@Component({
  selector: 'cos-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnDestroy {
  public pending$: Observable<boolean>;

  private pendingSubject = new BehaviorSubject(false);
  private destroy$ = new Subject<void>();

  constructor(
    @Inject(WINDOW) private readonly window: Window,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.pending$ = this.pendingSubject.asObservable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(loginData: LoginEvent): void {
    this.pendingSubject.next(true);

    this.authService.login(loginData.userId, loginData.password).pipe(
      catchError((error: any) => {
        if (isCustomError(error)) {
          return of(error);
        }
        return of(null);
      }),
      takeUntil(this.destroy$),
    ).subscribe((authData) => {
      this.pendingSubject.next(false);

      if (authData === null || isCustomError(authData)) {
        this.window.alert(authData?.message || SOMETHING_WRONG);
        return;
      }

      if (!isBuyer(authData)) {
        this.window.alert(SELLER_CANT_BE_USED);
        return;
      }

      this.router.navigate([ROUTES.AUCTIONS]);
    })
  }
}
