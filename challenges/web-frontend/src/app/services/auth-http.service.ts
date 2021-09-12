import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Auth} from "@cos/interfaces/authData";
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  constructor(private readonly httpClient: HttpClient) {
  }

  login(userId: string, password: string): Observable<Auth> {
    return this.httpClient.put<Auth>(`${environment.apiURLv1}/authentication/${userId}`, {password});
  }
}
