import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {AuthService} from "@cos/services/auth.service";
import {ROUTES} from "@cos/constants/routes";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): UrlTree | boolean {
    if (this.authService.isAuthorized()) {
      return true;
    }

    return this.router.parseUrl(`/${ROUTES.LOGIN}`);
  }

}
