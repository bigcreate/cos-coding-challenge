import {Injectable} from '@angular/core';
import {AuthHttpService} from "./auth-http.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Auth} from "@cos/interfaces/authData";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Auth | null = null;

  constructor(private readonly authHttpService: AuthHttpService) { }

  isAuthorized(): boolean {
    return this.user !== null && this.user.authenticated && !!this.user.token;
  }

  getAuthData(): Auth | null {
    return this.user;
  }

  login(userId: string, password: string): Observable<Auth> {
    return this.authHttpService.login(userId, password).pipe(
      tap((user) => this.user = user, () => this.user = null),
    )
  }
}
