import axios from 'axios';
import {IAxiosPaginatedRespose} from '../Network/IAxiosPaginatedResponse';
import {Product} from '../Model/Model_Product';

class ServiceProduct {
  static url = 'http://192.168.88.137:5000/product';

  static async getSome({page = 0}: {page?: number}) {
    try {
      const response = await axios.get<IAxiosPaginatedRespose<Product>>(
        `${this.url}?page=${page}`,
      );

      return response.data.data;
    } catch (e) {
     console.log(e);
    }
  }
}

export default ServiceProduct;
