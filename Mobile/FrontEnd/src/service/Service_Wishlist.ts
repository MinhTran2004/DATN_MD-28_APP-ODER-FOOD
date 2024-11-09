import axios from 'axios';
import {Product} from '../Model/Model_Product';
import {Model_WishlistItem} from '../Model/Model_Wishlist';

class ServiceWishlistItem {
  static url = 'http://192.168.88.225:5000/wishlist';

  static async get({userId}: {userId: string}) {
    try {
      const response = await axios.get<
        {userId: string; productId: Product; quantity: number}[]
      >(`${this.url}/user/${userId}`, {timeout: 1000});

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async set({wishlistItem}: {wishlistItem: Model_WishlistItem}) {
    try {
      await axios.patch(
        `${this.url}/user/${wishlistItem.userId}/product/${wishlistItem.productId._id}`,
        {quantity: wishlistItem.quantity},
        {timeout: 1000},
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default ServiceWishlistItem;
