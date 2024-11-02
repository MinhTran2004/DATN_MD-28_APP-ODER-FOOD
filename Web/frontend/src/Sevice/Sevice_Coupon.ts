import axios from "axios";
import ModelCoupon from "../Model/Model_Coupon";

export default class SeviceCoupon{
    static url = 'http://localhost:5000/coupon';

    static createCoupon = async (data:ModelCoupon) => {
        try{
            const reponse = await axios.post(`${this.url}/createCoupon`, data)
            return reponse;
        }catch(err){
            console.log(err);
        }
    }

    static getAllCouponByLimit = async (limit:number) => {
        try{
            const reponse = await axios.get(`${this.url}/getAllProductByLimit`, {
                params: {
                    skip: limit - 13,
                    limit: limit,
                }
            })
            return reponse.data;
        }catch(err){
            console.log(err);
        }
    }
}