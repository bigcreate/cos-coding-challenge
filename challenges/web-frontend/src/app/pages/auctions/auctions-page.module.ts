import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuctionsPageRoutingModule} from './auctions-page-routing.module';
import {AuctionsPageComponent} from './auctions-page.component';
import {AuctionsListModule} from "@cos/components/auctions-list/auctions-list.module";

@NgModule({
  declarations: [
    AuctionsPageComponent
  ],
    imports: [
        CommonModule,
        AuctionsPageRoutingModule,
        AuctionsListModule
    ]
})
export class AuctionsPageModule {
}
