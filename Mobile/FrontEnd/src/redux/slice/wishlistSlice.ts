import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../Model/Model_Product';
import {Model_Wishlist} from '../../Model/Model_Wishlist';
import { RootState } from '../store';

const initialState: {
  wishlist: Model_Wishlist | undefined;
  message: string | undefined;
} = {
  wishlist: undefined,
  message: undefined,
};

export const initializeWishlist = createAsyncThunk(
  'wishlist/init',
  async ({userId}: {userId: string}) => {
    try {
      const wishlist = new Model_Wishlist(userId, []);
      const new_wishlist = await wishlist.initItems();
      return new_wishlist;
    } catch (e) {
      console.log(e);
    }
  },
);

// Remove with callback, not like asynchronous remove in model
export const asyncRemove = createAsyncThunk(
  'wishlist/delete',
  async ({product}: {product: Product}, {getState}) => {
    try {
      const state = getState() as RootState;
      const new_wishlist = await state.wishlist.wishlist.asyncRemoveItem(product);
      return new_wishlist;
    } catch (e) {
      console.log(e);
    }
  },
);

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    set: (
      state,
      action: PayloadAction<{product: Product; quantity: number}>,
    ) => {
      const {product, quantity} = action.payload;
      state.wishlist = state.wishlist.setItem(product, quantity);
    },
    remove: (state, action: PayloadAction<{product: Product}>) => {
      const {product} = action.payload;
      state.wishlist = state.wishlist.removeItem(product);
    },
    setMessage: (state, action: PayloadAction<{message: string}>) => {
      state.message = action.payload.message;
    },
    removeMessage: state => {
      state.message = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(initializeWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(asyncRemove.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.message = 'Xóa sản phẩm thành công!';
      });
  },
});

export const {set, remove, setMessage, removeMessage} = wishlistSlice.actions;

export default wishlistSlice.reducer;
