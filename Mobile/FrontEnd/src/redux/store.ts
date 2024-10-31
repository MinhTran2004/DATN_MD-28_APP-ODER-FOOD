import { combineReducers, configureStore, createStore, ReducerType } from '@reduxjs/toolkit'
import { accountReducer } from './reducer/reducer';

const rootReducer = combineReducers({
    account: accountReducer,
})

const store = createStore(rootReducer);

export default store;