import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Auction} from "@cos/interfaces/auction";

@Component({
  selector: 'cos-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionCardComponent {
  @Input() auction: Auction | undefined;
}
