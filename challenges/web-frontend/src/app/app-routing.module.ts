import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTES} from "./constants/routes";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: ROUTES.LOGIN,
    loadChildren: () => import('./pages/login/login-page.module').then(mod => mod.LoginPageModule),
  },
  {
    path: ROUTES.AUCTIONS,
    loadChildren: () => import('./pages/auctions/auctions-page.module').then(mod => mod.AuctionsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ROUTES.AUCTIONS
  },
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
