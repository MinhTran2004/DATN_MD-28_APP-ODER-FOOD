import {Product} from './Model_Product';

// Cart interface
export interface Cart {
  _id?: string;
  idAccount: string; // User ID
  products: {productId: Product; quantity: number}[] | undefined; // Array of products with product ID and quantity
}

// Model_Cart class
export default class Model_Cart {
  idAccount: string;
  products: {productId: Product; quantity: number}[];

  constructor(
    idAccount: string,
    products: {productId: Product; quantity: number}[],
  ) {
    this.idAccount = idAccount;
    this.products = products;
  }

  // Method to add a product to the cart
  addProduct(product: Product, quantity: number) {
    const isPresent = this.products.find(p => p.productId._id === product._id);
    if (isPresent) {
      product.quantity += quantity; // Update quantity if product already exists
    } else {
      this.products.push({productId: product, quantity}); // Add new product
    }
  }

  // Method to remove a product from the cart
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.productId._id !== product._id);
  }

  // Method to update the quantity of a product in the cart
  updateProductQuantity(product: Product, quantity: number) {
    const isPresent = this.products.find(p => p.productId._id === product._id);
    if (isPresent) {
      product.quantity = quantity; // Set new quantity if product exists
    }
  }
}
