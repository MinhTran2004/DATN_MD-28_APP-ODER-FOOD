import {useCallback, useEffect} from 'react';
import Model_Cart from '../model/Model_Cart';
import ServiceCart from '../service/Service_Cart'; // Assuming a cart service exists
import {Product} from '../model/Model_Product';
import {
  set,
  addProduct,
  removeProduct,
  updateSuccess,
} from '../redux/slice/cartSlice';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

export const ViewModelCart = (_navigation: any) => {
  const dispatch = useAppDispatch();
  const {products, idAccount} = useAppSelector(state => state.cart.cart);
  const {needFetch, needUpdate, mutateAction} = useAppSelector(
    state => state.cart,
  );

  // Add a product to the cart
  const addProductToCart = async (
    userId: string = '672798058c24b3d617831a3f',
    product: Product,
    quantity: number,
  ) => {
    dispatch(addProduct({product, quantity}));
  };

  // Add a product to the cart
  const removeProductFromCart = async (
    userId: string = '672798058c24b3d617831a3f',
    product: Product,
    quantity: number,
  ) => {
    dispatch(removeProduct({product, quantity}));

    const existingProduct = products.find(p => p.productId._id === product._id);
    const cart = new Model_Cart(userId, products);

    // remove zero quantity item
    if (!existingProduct) {
      cart.products.push({productId: product, quantity: 0});
    }
    await ServiceCart.set({cart}); // Assuming ServiceCart has this method
  };

  // Create or update the cart
  const setCart = async (accountId: string) => {
    const cart = new Model_Cart(accountId, products);
    const updatedCart = await ServiceCart.set({cart}); // Assuming ServiceCart has this method
    return updatedCart;
  };

  // Fetch cart by account ID
  const getCart = useCallback(
    async (accountId: string = '672798058c24b3d617831a3f') => {
      const response = await ServiceCart.get({accountId}); // Assuming ServiceCart has this method
      if (response) {
        dispatch(set(response));
      }
      return response;
    },
    [dispatch],
  );

  // Initalize LocalState
  useEffect(() => {
    if (needFetch) {
      getCart(undefined);
    }
  }, [getCart, needFetch]);

  // Update to Backend
  useEffect(() => {
    if (!needUpdate) {
      return;
    }

    const cart = new Model_Cart(idAccount, products);
    ServiceCart.set({cart}).then(() => dispatch(updateSuccess(mutateAction))); // Assuming ServiceCart has this method
  }, [products, idAccount, needUpdate, dispatch, mutateAction]);
  return {
    products,
    addProductToCart,
    removeProductFromCart,
    getCart,
    setCart,
  };
};
