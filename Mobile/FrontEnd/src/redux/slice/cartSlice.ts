import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart} from '../../model/Model_Cart';
import {Product} from '../../model/Model_Product';

const initialState: {cart: Cart; needUpdate: boolean; needFetch: boolean} = {
  cart: {
    idAccount: '672798058c24b3d617831a3f',
    products: undefined,
  },
  needUpdate: false,
  needFetch: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    set: (state, action: PayloadAction<Cart>) => {
      state.cart.products = action.payload.products;
      state.needFetch = false;
    },
    updateSucess: state => {
      state.needUpdate = false;
    },
    addProduct: (
      state,
      action: PayloadAction<{product: Product; quantity: number}>,
    ) => {
      state.needUpdate = true;
      let products = state.cart.products;
      const existingProduct = products.find(
        p => p.productId._id === action.payload.product._id,
      );
      if (existingProduct) {
        existingProduct.quantity =
          existingProduct.quantity + action.payload.quantity;
      } else {
        state.cart.products.push({
          productId: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeProduct: (
      state,
      action: PayloadAction<{product: Product; quantity: number}>,
    ) => {
      state.needUpdate = true;
      const products = state.cart.products;
      const existingProduct = products.find(
        p => p.productId._id === action.payload.product._id,
      );
      if (existingProduct) {
        existingProduct.quantity -= action.payload.quantity;
      }
      state.cart.products = products.filter(({quantity}) => quantity > 0);
    },
  },
});

export const {set, updateSucess, addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
