import {useEffect} from 'react';
import {Product} from '../Model/Model_Product';

import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {
  asyncRemove,
  initializeWishlist,
  remove,
  set,
} from '../redux/slice/wishlistSlice';
import {ViewModelAccount} from './VM_Account';
import SeviceAccount from '../service/Seveice_Account';

export const ViewModelWishlist = (_navigation: any) => {
  const {account, password} = ViewModelAccount(_navigation);
  const dispatch = useAppDispatch();
  const {message, wishlist} = useAppSelector(state => state.wishlist);

  // Add a product to the cart (co am co duong)
  const addProductToWishlist = async (product: Product, quantity: number) => {
    const currentItem = wishlist.wishlistItems.find(
      wishlistItem => wishlistItem.productId._id === product._id,
    );
    const currentQuantity = currentItem?.quantity ?? 0;
    const updatedQuantity = currentQuantity + quantity;

    // Case: item ton tai, cap nhat <0: xoa item
    if (currentItem && updatedQuantity <= 0) {
      dispatch(remove({product: currentItem.productId}));
    }
    // Case: cap nhat >0: set item
    if (updatedQuantity > 0) {
      dispatch(set({product, quantity}));
    }
    // Case: item khong ton tai, cap nhat <0: skip
  };

  // Remove product from wishlist
  const removeProductFromWishlist = (product: Product) => {
    dispatch(remove({product}));
  };
  // Remove product from wishlist
  const asyncRemoveProductFromWishlist = async (product: Product) => {
    dispatch(asyncRemove({product}));
  };

  useEffect(() => {
    const initWishlist = async () => {
      const userId = (
        await SeviceAccount.getAccountByAccountAndPassword(account, password)
      ).account._id;
      dispatch(initializeWishlist({userId}));
    };

    if (!wishlist) {
      initWishlist();
    }
  }, [account, dispatch, password, wishlist]);

  return {
    wishlist,
    message,
    addProductToWishlist,
    removeProductFromWishlist,
    asyncRemoveProductFromWishlist,
  };
};
