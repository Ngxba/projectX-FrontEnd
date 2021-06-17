/* eslint-disable */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';
import { productsReducer, productReducer } from './reducers/productReducer';
import homeReducer from './reducers/homeReducer';
import relatedProductsReducer from './reducers/relatedProducReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  orderState: orderReducer,
  productsState: productsReducer,
  productState: productReducer,
  relatedProductsState: relatedProductsReducer,
  homeState: homeReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
  ),
);

export default store;
