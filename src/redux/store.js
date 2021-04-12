/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productReducer';
import homeReducer from './reducers/homeReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  productsState: productsReducer,
  homeState: homeReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
