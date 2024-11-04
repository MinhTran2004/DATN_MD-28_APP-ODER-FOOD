import { combineReducers, configureStore, createStore, ReducerType } from '@reduxjs/toolkit';
import { accountReducer } from './reducer/reducer';
import cartSlice from './slice/cartSlice';

const rootReducer = combineReducers({
    account: accountReducer,
    cart: cartSlice,
});

const store = createStore(rootReducer);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
