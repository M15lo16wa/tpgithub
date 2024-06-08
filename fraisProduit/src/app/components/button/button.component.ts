import { Component, Input, OnInit } from '@angular/core';

import { CartItem } from 'src/app/models/cart-item.model';
import { frais } from 'src/app/models/food.model';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() newItem!: frais;

  constructor() { }

  ngOnInit() {
    this.newItem;
    if (this.newItem) {
      console.log('Produit chargé dans le bouton:', this.newItem); // Affichage des elements chargés depuis la page detail dans la console
    }
    //this.cartService.addToCart(this.newItem); // Ajouter l'élément au panier
  }

  //ajout des produit dans le panier
  addToCart(){
    const CartItem: CartItem = {
      id: this.newItem.id,
      image: this.newItem.image,
      title: this.newItem.title,
      price: this.newItem.price,
      quantity: this.newItem.quantity,
      getCategorie: function (id: number): CartItem {
        throw new Error('Function not implemented.');
      }
    }
  }
}
