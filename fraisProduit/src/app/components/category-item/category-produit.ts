import { Injectable } from "@angular/core";
import { frais } from "src/app/models/food.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryProduit {
    private categories: frais[] = [
        {
            id: 1,
            title: 'tom',
            image: '../../../../assets/icon/menu9.jpg',
            price: 123,
            description: 'produit de mer',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 2,
            title: 'carpe',
            image: '../../../../assets/icon/menu8.jpg',
            price: 456,
            description: 'produit de rivière',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 3,
            title: 'crabe',
            image: '../../../../assets/icon/menu7.jpg',
            price: 789,
            description: 'produit de mer',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 4,
            title: 'legumes',
            image: '../../../../assets/icon/plat.jpeg',
            price: 321,
            description: 'produit de la terre',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            }
        }
    ];

    getCategorie(): frais[] {
        return this.categories;
    }

    getCategorieById(id: number): frais {
        const categorie = this.categories.find((cat) => cat.id === id);
        if (!categorie) {
            throw new Error(`Categorie with id ${id} not found`);
        }
        return categorie;
    }
}
