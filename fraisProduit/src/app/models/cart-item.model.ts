export interface CartItem {
    getCategorie(id: number):CartItem;
    id: number;
    title: String;
    price: number;
    quantity: number;
    image: String;
}