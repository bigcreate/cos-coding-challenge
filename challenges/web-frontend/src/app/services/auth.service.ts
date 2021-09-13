import {Inject, Injectable} from '@angular/core';
import {AuthHttpService} from "./auth-http.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Auth} from "@cos/interfaces/authData";
import {LOCAL_STORAGE} from "@cos/injection-tokens/global";
import {Router} from "@angular/router";
import {ROUTES} from "@cos/constants/routes";

const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Auth | null = null;

  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    private readonly authHttpService: AuthHttpService,
    private readonly router: Router,
  ) {
    try {
      this.user = JSON.parse(this.localStorage.getItem(USER) || '');
    } catch {
      this.user = null;
    }
  }

  isAuthorized(): boolean {
    return this.user !== null && this.user.authenticated && !!this.user.token;
  }

  getAuthData(): Auth | null {
    return this.user;
  }

  login(userId: string, password: string): Observable<Auth> {
    return this.authHttpService.login(userId, password).pipe(
      tap((user) => this.saveAuthData(user), () => this.saveAuthData(null)),
    )
  }

  logout(): void {
    this.saveAuthData(null);
    this.router.navigate([ROUTES.LOGIN]);
  }

  private saveAuthData(user: Auth | null): void {
    this.user = user;

    if (user === null) {
      this.localStorage.removeItem(USER);
    } else {
      this.localStorage.setItem(USER, JSON.stringify(user));
    }
  }
}
