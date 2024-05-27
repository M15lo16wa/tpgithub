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
    constructor(private activeRoute: ActivatedRoute, private produit:CategoryProduit) {
    const idParam = this.activeRoute.snapshot.paramMap.get('id');
    this.id = idParam ? parseInt(idParam, 10) : 0;
  }
  ngOnInit() {
    /*this.produit.getCategorie(this.id);*/
    this.produit.getCategorie();
  }

}
