import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "@env/environment";
import {Page} from "@cos/interfaces/page";
import {Auction} from "@cos/interfaces/auction";

@Injectable({
  providedIn: 'root'
})
export class AuctionsHttpService {
  constructor(private readonly httpClient: HttpClient) { }

  getAuctions(): Observable<Page<Auction>> {
    return this.httpClient.get<Page<Auction>>(`${environment.apiURLv2}/auction/buyer/`);
  }
}
