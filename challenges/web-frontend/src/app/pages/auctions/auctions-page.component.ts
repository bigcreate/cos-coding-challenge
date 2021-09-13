import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuctionsService} from "@cos/services/auctions.service";
import {Observable} from "rxjs";
import {AuthService} from "@cos/services/auth.service";
import {Auction} from "@cos/interfaces/auction";

@Component({
  selector: 'cos-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionsPageComponent {
  public auctions$: Observable<Auction[]>;

  constructor(
    private readonly auctionsService: AuctionsService,
    private readonly authService: AuthService,
  ) {
    this.auctions$ = this.auctionsService.subscribeOnAuctions().pipe(
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
