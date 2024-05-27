import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FoodListComponent],
    imports: [CommonModule, IonicModule],
    exports: [FoodListComponent]
})
export class FoodListModule { }