import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingPage } from './listing.page';
import { DetailPage } from '../detail/detail.page';

const routes: Routes = [
  {
    path: '',
    component: ListingPage
  },
  { path: 'detail/:id', component: DetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingPageRoutingModule {}
