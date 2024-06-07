import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // @Output() clicked = new EventEmitter();



  constructor(private carservice: CartService ) {}

  ngOnInit() {
    this.Item! = this.carservice.getCart();
    // /*this.items = this.cartService.getCart();*/
    // console.log('contenu panier:',this.Item);
  }
//   getTotal() {
//     let total = 0;
//     this.Item.subscribe(items => {
//       total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     });
// }
}
