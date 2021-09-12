import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionsPageComponent} from "./auctions-page.component";

const routes: Routes = [
  {
    path: '',
    component: AuctionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionsPageRoutingModule {
}
