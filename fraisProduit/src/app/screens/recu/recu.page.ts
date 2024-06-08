import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart-item.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {
  Item!:Observable<CartItem[]>;
  total: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.Item =this.cartService.getCart();
    this.calculateTotal();
  }
  calculateTotal() {
    this.Item.subscribe(items => {
      this.total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

}
