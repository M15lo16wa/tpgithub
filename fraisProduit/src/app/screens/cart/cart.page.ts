import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  Item!: Observable<CartItem[]>;

  //items: frais[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.Item = this.cartService.getCart();
    // /*this.items = this.cartService.getCart();*/
    // console.log('contenu panier:',this.Item);
  }

  getTotal() {
    let total = 0;
    this.Item.subscribe(items => {
      total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
    return total;
  }

  clearCart() {
    this.cartService.clearCart();
    this.Item = this.cartService.clearCart(); // Videz le panier en utilisant la méthode clearCart du service CartService
  }
  /*getTotal() {
  return this.cartItem$.reduce((total, item) => total + item.price * item.quantity, 0);
  }*/
}
