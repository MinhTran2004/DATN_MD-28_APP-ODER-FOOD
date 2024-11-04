import axios from 'axios';
import {Cart} from '../model/Model_Cart';
import {IAxiosPatchRespose} from '../network/IAxiosPatchResponse';

class ServiceProduct {
  static url = 'http://192.168.88.137:5000/cart/user';

  static async get({accountId}: {accountId: string}) {
    try {
      const response = await axios.get<Cart>(`${this.url}/${accountId}`);

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async set({cart}: {cart: Cart}) {
    try {
      const response = await axios.patch<IAxiosPatchRespose<Cart>>(
        `${this.url}/${cart.idAccount}`,
        cart,
      );

      const result = response.data;

      if ('error' in result) {
        throw new Error('Patch failed');
      }

      if ('result' in result) {
        return result.result;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServiceProduct;
