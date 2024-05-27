import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from "src/app/screens/listing/listing-routing.module";

import { ListingPage } from "src/app/screens/listing/listing.page";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        ListingPageRoutingModule
    ],
    exports:[ListingPage],
    declarations:[ListingPage]
})

export class SearchbarModule{}