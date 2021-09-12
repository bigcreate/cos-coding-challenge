import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";
import {AuthService} from "@cos/services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isCOSApiRequest = request.url.startsWith(environment.apiURLv1) || request.url.startsWith(environment.apiURLv2);
    if (!isCOSApiRequest) {
      return next.handle(request);
    }

    const authData = this.authService.getAuthData();
    if (authData === null) {
      return next.handle(request);
    }

    const authHeaders: HttpHeaders = new HttpHeaders({
      userid: authData.userId,
      authtoken: authData.token,
    });
    const authRequest = request.clone({
      headers: authHeaders
    });
    return next.handle(authRequest)
  }
}
