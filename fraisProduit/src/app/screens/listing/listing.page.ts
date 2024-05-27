import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';

import { frais } from 'src/app/models/food.model';
import { CategoryProduit } from 'src/app/components/category-item/category-produit';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: category[]=[];
  item:any= [];

  Produits: frais[] = [];

  constructor(private categoryProduit: CategoryProduit, private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.Produits = this.categoryProduit.getCategorie();
  }

  getCategories(){
    this.categories=[
      {
        id: 1,
        label: 'ton',
        image: '../../../../assets/icon/menu2.jpg',
        active: false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:2,
        label:'carpe',
        image: '../../../../assets/icon/menu6.jpg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:3,
        label:'crabe',
        image: '../../../../assets/icon/menu4.jpg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      },
      {
        id:4,
        label:'legumes',
        image: '../../../../assets/icon/menu5.jpg',
        active:false,
        getCategorie: function (id: number): unknown {
          throw new Error('Function not implemented.');
        }
      }
    ];
  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

  goToCartPage(id: number){
    this.router.navigate(['detail', id]);
  }
}
