export interface Product {
  _id: string;
  idCategory: string;
  name: string;
  price: number;
  discount: number;
  image: string;
  sold: number;
  quantity: number;
  rate: number;
  describe: string;
  dateCreate: Date;
}

export class Model_Product {
    _id: string;
    idCategory: string;
    name: string;
    price: number;
    discount: number;
    image: string;
    sold: number;
    quantity: number;
    rate: number;
    describe: string;
    dateCreate: Date;

    constructor(
        _id: string,
        idCategory: string,
        name: string,
        price: number,
        discount: number,
        image: string,
        sold: number,
        quantity: number,
        rate: number,
        describe: string,
        dateCreate: Date
    ) {
        this._id = _id;
        this.idCategory = idCategory;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.image = image;
        this.sold = sold;
        this.quantity = quantity;
        this.rate = rate;
        this.describe = describe;
        this.dateCreate = dateCreate;
    }
}
