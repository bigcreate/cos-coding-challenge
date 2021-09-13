import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Auction} from "@cos/interfaces/auction";

@Component({
  selector: 'cos-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionsListComponent {
  @Input() auctions: Auction[] | null = [];

  trackById(index: number, item: Auction): number {
    return item.id;
  }
}
