import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    [x: string]: any;
    private items$ = new BehaviorSubject<CartItem[]>([]);
    private cartItems: CartItem[] = [];
    getCart(): Observable<CartItem[]> {
        return this.items$.asObservable();
    }

    clearCart(): Observable<CartItem[]> {
        this.cartItems = [];
        this.items$.next(this.cartItems);
        return this.items$.asObservable();
    }

    addToCart(newItem: CartItem) {
        // verifiant si l'element avec le meme id existe dans la liste
        const existingItemIndex = this.cartItems.findIndex(item => item.id === newItem.id);
        if (existingItemIndex !== -1) {
            // si l'item exists, on increment la quantité est on met à jour le prix
            const existingItem = this.cartItems[existingItemIndex];
            existingItem.quantity += newItem.quantity;
            existingItem.price += newItem.price * newItem.quantity;
        } else {
            // si l'item n'exist pas, on l'ajout dans le panier
            this.cartItems.push(newItem);
        }
        this.items$.next(this.cartItems);
        console.log('le service:', this.items$);
        // this.items$.next([...this.items$.getValue(), newItem]);
        // console.log('le service:',this.items$);
    }

    //suppression d'un element dans le panier
    removeFromCart(item: CartItem) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
        this.items$.next(this.cartItems);
    }
}
