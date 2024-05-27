export interface frais{
    getCategorie(id: number): frais;
    id: number;
    title: String;
    price: number;
    image: string;
    description: string;
}