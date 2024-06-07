import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';
//import { ButtonComponent } from 'src/app/components/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: DetailPage,
    //redirection vers le panier
    // children:[
    //   {
    //     path: 'cart',
    //     loadChildren: () => import('../cart/cart.module').then( (m)=> m.CartPageModule)
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
