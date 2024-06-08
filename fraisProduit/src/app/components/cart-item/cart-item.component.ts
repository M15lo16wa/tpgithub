import { Component, Input, OnInit} from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent  implements OnInit {
  @Input() Item!: Observable<CartItem[]>;


  constructor(private carservice: CartService ) {}

  ngOnInit() {
    this.Item! = this.carservice.getCart();
    // console.log('contenu panier:',this.Item);
  }

  removeItem(item: CartItem) {
    this.carservice['removeFromCart'](item);
  }
}
