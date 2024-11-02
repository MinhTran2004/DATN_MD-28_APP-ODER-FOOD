export interface Coupon {
    _id:string;
    name: string;
    image: string;
    discountType: string;
    discountValue: string;
    maxDiscount: string;
    quantity: number;
    condition: number;
    startDate: string;
    endDate: string;
    describe: string;
    idAccount: string;
    createAt: string;
    updateAt: string;
    status: string;
}

export default class ModelCoupon {
    name: string;
    image: string;
    discountType: string;
    discountValue: number;
    maxDiscount: number;
    quantity: number;
    condition: number;
    startDate: string;
    endDate: string;
    describe: string;
    status: string;

    constructor(name: string, image: string, discountType: string, discountValue: number, maxDiscount: number, quantity: number, condition: number, startDate: string, endDate: string, describe: string, status: string) {
        this.name = name;
        this.image = image;
        this.condition = condition;
        this.discountType = discountType;
        this.discountValue = discountValue;
        this.maxDiscount = maxDiscount;
        this.quantity = quantity;
        this.startDate = startDate;
        this.endDate = endDate;
        this.describe = describe;
        this.status = status;
    }
}