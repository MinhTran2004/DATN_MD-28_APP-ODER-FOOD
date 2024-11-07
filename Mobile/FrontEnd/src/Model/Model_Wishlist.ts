import ServiceWishlistItem from '../service/Service_Wishlist';
import {Product} from './Model_Product';

// Wishlist
export type Wishlist = WishlistItem[];

// Wishlist Item
export interface WishlistItem {
  _id?: string;
  userId: string; // User ID
  productId: Product; // Product (cascaded from productId)
  quantity: number;
}

// Model_WishlistItem class
export class Model_WishlistItem {
  userId: string; // User ID
  productId: Product; // Product (cascaded from productId)
  quantity: number;

  constructor(userId: string, productId: Product, quantity: number = 0) {
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
  }
}

export class Model_Wishlist {
  userId: string;
  wishlistItems: Model_WishlistItem[];

  constructor(userId: string, wishlistItems: Model_WishlistItem[]) {
    this.userId = userId;
    this.wishlistItems = wishlistItems;
  }

  // initialize Wishlist from MongoDB
  async initItems() {
    try {
      const wishlistItems = await ServiceWishlistItem.get({
        userId: this.userId,
      });
      this.wishlistItems = wishlistItems;

      return new Model_Wishlist(this.userId, this.wishlistItems);
    } catch (e) {
      console.log(e);
    }
  }

  // add new product to Wishlish
  setItem(product: Product, quantity: number) {
    const currentItem = this.wishlistItems.find(
      wishlistItem => wishlistItem.productId._id === product._id,
    );

    if (currentItem) {
      currentItem.quantity = (currentItem?.quantity ?? 0) + quantity; // Update quantity if product already exists

      // persistent to MongoDB
      ServiceWishlistItem.set({wishlistItem: currentItem});
    } else {
      const wishlistItem = new Model_WishlistItem(
        this.userId,
        product,
        quantity,
      );

      // persistent to MongoDB
      ServiceWishlistItem.set({wishlistItem});
      this.wishlistItems.push(wishlistItem); // Add new product
    }

    return new Model_Wishlist(this.userId, this.wishlistItems);
  }

  // Remove product from Wishlist
  removeItem(product: Product) {
    const isPresent = this.wishlistItems.find(
      wishlistItem => wishlistItem.productId._id === product._id,
    );
    if (isPresent) {
      // persistent to MongoDB
      ServiceWishlistItem.set({
        wishlistItem: {productId: product, quantity: 0, userId: this.userId},
      });

      const newWishlists = this.wishlistItems.filter(wishlistItem => {
        return wishlistItem.productId._id.toString() !== product._id;
      });
      return new Model_Wishlist(this.userId, newWishlists);
    }
  }

  // Remove product from Wishlist
  async asyncRemoveItem(product: Product) {
    const isPresent = this.wishlistItems.find(
      wishlistItem => wishlistItem.productId._id === product._id,
    );
    if (isPresent) {
      // persistent to MongoDB
      await ServiceWishlistItem.set({
        wishlistItem: {productId: product, quantity: 0, userId: this.userId},
      });

      const newWishlists = this.wishlistItems.filter(wishlistItem => {
        return wishlistItem.productId._id.toString() !== product._id;
      });
      return new Model_Wishlist(this.userId, newWishlists);
    }
  }
}
