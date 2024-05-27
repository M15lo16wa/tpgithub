import { Component, OnInit } from '@angular/core';
import { CategoryProduit } from 'src/app/components/category-item/category-produit';

import { ActivatedRoute } from '@angular/router';
import { frais } from 'src/app/models/food.model';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id!: number;
  produits!:frais;
    constructor(private ActivatedRoute: ActivatedRoute, private categoryProduit: CategoryProduit) {
    const idParam = this.ActivatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      this.produits = this.categoryProduit.getCategorieById(this.id);
    }
  }
  ngOnInit() {
    /*this.produit.getCategorie(this.id);*/
    this.produits.getCategorie(this.id);
  }

}
