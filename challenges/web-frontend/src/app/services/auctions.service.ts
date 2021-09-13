import {Injectable} from '@angular/core';
import {AuctionsHttpService} from "@cos/services/auctions-http.service";
import {Observable, timer} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {Auction} from "@cos/interfaces/auction";

const UPDATE_INTERVAL = 20000;

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private readonly auctionsHttpService: AuctionsHttpService) { }

  subscribeOnAuctions(): Observable<Auction[]> {
    return timer(0, UPDATE_INTERVAL).pipe(
      switchMap(() => this.auctionsHttpService.getAuctions()),
      map((page) => page.items),
    )
  }
}
