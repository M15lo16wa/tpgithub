import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { category } from 'src/app/models/category.model';
import { frais } from 'src/app/models/food.model';
import { CategoryProduit } from 'src/app/components/category-item/category-produit';
import { DetailPage } from '../detail/detail.page';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: category[]=[];
  item:any= [];
  Produits: frais[] = [];

  constructor(private categoryProduit: CategoryProduit, private modalContorller:ModalController) {}

  ngOnInit() {
    this.getCategories();
    this.Produits = this.categoryProduit.getCategorie();
  }
// liste des produits
  getCategories(){
    this.categories=[
      {
        id: 1,
        label: 'Poisson de mer',
        image: '../../../../assets/icon/menu2.jpg',
        active: false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:2,
        label:'Fruit de mer',
        image: '../../../../assets/icon/menu6.jpg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:3,
        label:'Base de poulet',
        image: '../../../../assets/icon/menu4.jpg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:4,
        label:'Vegetarien',
        image: '../../../../assets/icon/plat.jpeg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      }
    ];
  }
//envoie du produit selectioné dans la page detail
  async goToDetailPage(productId: number) {
    const modal = await this.modalContorller.create({
        component: DetailPage,
        componentProps: {
          'productId': productId
        }
      });
      await modal.present();
      //console.log('le produit choisis:',this.categories);
      return await modal.present();
  }

  /*addToCart(id: number) {
    this.ModalContorller.create({component: CartPage});
  }*/
  /*goToCartPage(id:number){
    this.router.navigate(['cart',id]);
  }*/
}