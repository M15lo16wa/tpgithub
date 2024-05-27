import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailPageRoutingModule } from './detail-routing.module';
import { DetailPage } from './detail.page';

import { BadgeModule } from 'src/app/components/badge/badge.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    BadgeModule,
    CategoryItemModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
