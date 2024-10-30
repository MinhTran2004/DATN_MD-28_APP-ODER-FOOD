export interface Product{
    id?:string;
    idCategory?: string;
    name?: string;
    price?: string;
    discount?: string;
    image?: string;
    sold?: string;
    quantity?: string;
    rate?: string;
    describe?: string;
    status?: string;
}

export default class ModelProduct{
    idCategory: string;
    name: string;
    price: string;
    discount: string;
    image: string;
    sold: string;
    quantity: string;
    rate: string;
    describe: string;
    status: string;

    constructor (idCategory:string = "", name:string = "", price:string = "", discount:string = "", image:string = "", sold:string = "", quantity:string = "",  rate:string = "", describe:string = "", status:string = ""){
        this.idCategory = idCategory;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.image = image;
        this.sold = sold;
        this.quantity = quantity;
        this.rate = rate;
        this.describe = describe;
        this.status = status;
    }

    static isCheckNullProduct (data:ModelProduct): boolean {
        return Object.values(data).every(value => value !== "");
    }

}