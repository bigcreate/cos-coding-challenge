import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuctionsListComponent} from './auctions-list.component';
import {AuctionCardModule} from "@cos/components/auction-card/auction-card.module";

@NgModule({
  declarations: [
    AuctionsListComponent
  ],
  exports: [
    AuctionsListComponent
  ],
  imports: [
    CommonModule,
    AuctionCardModule
  ]
})
export class AuctionsListModule {
}
