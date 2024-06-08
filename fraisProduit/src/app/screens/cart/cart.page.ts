import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  Item!: Observable<CartItem[]>;
  constructor(private cartService: CartService,private location: Location) {}

  ngOnInit() {
    this.Item = this.cartService.getCart();
  }

  // on effectue la somme du prix de produit selectionné et icremente la quantité du produit
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
  navigateToRecu(){
    this.location.back();
  }
}
