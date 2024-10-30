import axios from "axios";
import ModelProduct from "../Model/Model_Product";

export default class SeviceProduct {
    static url = 'http://localhost:5000/product';

    static async createProduct(data: ModelProduct) {
        try {
            const response = await axios.post(`${this.url}/createProduct`, data);
            return response != null;
        } catch (err) {
            console.log(err);
        }
    }


    static async getAllProductByLimit(limit: number) {
        try {
            const response = (await axios.get(`${this.url}/getAllProductByLimit`, { params: { skip: limit - 10, limit: limit } })).data;
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}