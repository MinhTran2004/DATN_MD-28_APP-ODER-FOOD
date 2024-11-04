import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart} from '../../Model/Model_Cart';
import {Product} from '../../Model/Model_Product';

export enum MUTATE_TYPE {
  'delete',
  'increase',
  'decrease',
  'add',
}

const initialState: {
  cart: Cart;
  needUpdate: boolean;
  needFetch: boolean;
  message: string | undefined;
  mutateAction: MUTATE_TYPE | undefined;
} = {
  cart: {
    idAccount: '672798058c24b3d617831a3f',
    products: undefined,
  },
  needUpdate: false,
  needFetch: true,
  message: undefined,
  mutateAction: undefined,
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
    removeMessage : state =>{
      state.message = undefined;
    },
    updateSuccess: (state, action: PayloadAction<MUTATE_TYPE | undefined>) => {
      state.needUpdate = false;
      state.mutateAction = undefined;

      if (action.payload === MUTATE_TYPE.delete) {
        state.message = 'Xóa sản phẩm thành công!';
      }
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
    deleteProduct: (state, action: PayloadAction<Product>) => {
      state.needUpdate = true;
      state.mutateAction = MUTATE_TYPE.delete;
      const products = state.cart.products;

      state.cart.products = products.filter(
        ({productId}) => productId._id !== action.payload._id,
      );
    },
  },
});

export const {set, updateSuccess, addProduct, removeProduct, deleteProduct, removeMessage} =
  cartSlice.actions;

export default cartSlice.reducer;
