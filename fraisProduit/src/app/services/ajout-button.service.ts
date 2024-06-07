import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class AjoutService {
    private DetailData: CartItem[] = [];
    addToCart(item: CartItem) {
        this.DetailData.push(item);
        console.log('Panier mis à jour:', this.DetailData);//affichage dans la console le contenu de la page detail qui est rediriger dans le panier
    }
    getDetailData(): CartItem[] {
        return this.DetailData;
    }
}