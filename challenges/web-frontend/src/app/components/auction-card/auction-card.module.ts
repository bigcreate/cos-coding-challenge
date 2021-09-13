import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuctionCardComponent} from './auction-card.component';
import {PipesModule} from "@cos/pipes/pipes.module";

@NgModule({
  declarations: [
    AuctionCardComponent
  ],
  exports: [
    AuctionCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class AuctionCardModule {
}
