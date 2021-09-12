import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {ROUTES} from "../constants/routes";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): UrlTree | boolean {
    // if (isLoggedIn) { return true; }

    return this.router.parseUrl(`/${ROUTES.LOGIN}`);
  }

}
