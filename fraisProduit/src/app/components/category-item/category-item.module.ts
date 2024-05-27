import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations:[CategoryItemComponent],
    exports: [CategoryItemComponent],
    imports:[CommonModule, IonicModule]
})
export class CategoryItemModule {}