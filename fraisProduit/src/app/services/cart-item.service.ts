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
        this.items$.next([...this.items$.getValue(), newItem]);
        console.log('le service:',this.items$);
    }

    // getCart() {
    //     return this.items$.asObservable();
    // }

    // removeItem(id: number) {
    //     const updatedItems = this.items$.getValue().filter(item => item.id !== id);
    //     this.items$.next(updatedItems);
    // }

    // clearCart() {
    //     this.items$.next([]);
    // }
}
