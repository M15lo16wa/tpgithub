import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registre',
    loadChildren: () => import('./registre/registre.module').then( m => m.RegistrePageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./screens/listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./screens/cart/cart.module').then( m => m.CartPageModule)
  },  {
    path: 'recu',
    loadChildren: () => import('./screens/recu/recu.module').then( m => m.RecuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }