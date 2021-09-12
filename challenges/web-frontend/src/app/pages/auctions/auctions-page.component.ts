import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'cos-auctions-page',
  templateUrl: './auctions-page.component.html',
  styleUrls: ['./auctions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionsPageComponent {
}
