import { applyMiddleware, combineReducers, configureStore, createStore, ReducerType } from '@reduxjs/toolkit';
import { accountReducer } from './reducer/reducer';
import { thunk } from 'redux-thunk';
import wishlistSlice  from './slice/wishlistSlice';

const rootReducer = combineReducers({
    account: accountReducer,
    wishlist: wishlistSlice,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

