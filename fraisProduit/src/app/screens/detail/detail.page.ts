import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

import { CategoryProduit } from 'src/app/components/category-item/category-produit';
import { frais } from 'src/app/models/food.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart-item.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl:'./detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  productId!: number;
  produits!: frais;
  newItem!: frais; //proprieté utilisée pour stocker les elements chargés depuis la page listing
  categories: any;

  constructor(
    private navParams: NavParams,
    private toasContrl: ToastController,
    private categoryProduit: CategoryProduit,
    private cartService: CartService,
    private location: Location
    // private router: Router
  ) {}

  ngOnInit() {
    this.productId = this.navParams.get('productId');
    if (this.productId !== undefined) {
      this.produits = this.categoryProduit.getCategorieById(this.productId);
      console.log('Produit chargé:', this.produits); // Affiche le produit chargé de la page detail dans la console
    }
  }

//Ajout des elements charger dans la page boutton
  addToCart() {
    const cartItem: CartItem = {
      id: this.produits.id,
      title: this.produits.title,
      price: this.produits.price,
      image: this.produits.image,
      quantity: this.produits.quantity,
      getCategorie: function (id: number): CartItem {
        throw new Error('Function not implemented.');
      }
    };
    this.cartService.addToCart(cartItem);
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toasContrl.create({
      message: 'le produit est ajouté au panier',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  navigateToHome() {
    this.location.back();

    // this.router.navigate(['']);
  }
  navigateToPage() {
    this.location.back();

    // this.router.navigate(['']);
  }
}
