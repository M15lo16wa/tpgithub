import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListingPageRoutingModule } from './listing-routing.module';
import { ListingPage } from './listing.page';

import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
import { FoodListModule } from 'src/app/components/food-list/food-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    CategoryItemModule,
    FoodListModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
