import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuctionsPageRoutingModule} from './auctions-page-routing.module';
import {AuctionsPageComponent} from './auctions-page.component';

@NgModule({
  declarations: [
    AuctionsPageComponent
  ],
  imports: [
    CommonModule,
    AuctionsPageRoutingModule
  ]
})
export class AuctionsPageModule {
}
