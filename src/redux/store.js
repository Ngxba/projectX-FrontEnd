/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';
import { productsReducer, productReducer } from './reducers/productReducer';
import homeReducer from './reducers/homeReducer';
import relatedProductsReducer from './reducers/relatedProducReducer';
import breadcrumbsReducer from './reducers/breadcrumbsReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  productsState: productsReducer,
  productState: productReducer,
  relatedProductsState: relatedProductsReducer,
  homeState: homeReducer,
  breadcrumbsState: breadcrumbsReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
