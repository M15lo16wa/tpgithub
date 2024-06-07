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
            image: '../../../../assets/icon/plat.jpeg',
            price: 123,
            description: 'produit de mer',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            },
            quantity: 0,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 2,
            title: 'carpe',
            image: '../../../../assets/icon/plat.jpeg',
            price: 456,
            description: 'produit de rivière',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            },
            quantity: 0,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 3,
            title: 'crabe',
            image: '../../../../assets/icon/plat.jpeg',
            price: 789,
            description: 'produit de mer',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            },
            quantity: 1,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
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
            },
            quantity: 1,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 5,
            title: 'legumes',
            image: '../../../../assets/icon/plat.jpeg',
            price: 321,
            description: 'produit de la terre',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            },
            quantity: 1,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
                throw new Error("Function not implemented.");
            }
        },
        {
            id: 6,
            title: 'legumes',
            image: '../../../../assets/icon/plat.jpeg',
            price: 321,
            description: 'produit de la terre',
            getCategorie: function (id: number): frais {
                throw new Error("Function not implemented.");
            },
            quantity: 1,
            getValue: function (): unknown {
                throw new Error("Function not implemented.");
            },
            reduce: function (arg0: (i: any, j: any) => any, arg1: number): unknown {
                throw new Error("Function not implemented.");
            }
        },
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
