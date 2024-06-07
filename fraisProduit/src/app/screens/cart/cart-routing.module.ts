import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage,
    // children:[
    //   {
    //     path:'cartIem',
    //     loadChildren: () => import('../../components/cart-item/cart-item.module').then((m) => m.CartItemModule)
    //   },
    //   {
    //     path:'',
    //     redirectTo:'cartItem',
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
