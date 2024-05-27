export interface category{
    getCategorie(id: number): unknown;
    id:number;
    label: String;
    image: String;
    active: boolean;
}