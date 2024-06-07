export interface frais{
    reduce(arg0: (i: any, j: any) => any, arg1: number): unknown;
    getValue(): unknown;
    getCategorie(id: number): frais;
    id: number;
    title: String;
    price: number;
    image: string;
    description: string;
    quantity: number
}