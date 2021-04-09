import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from './productReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  productsState: productsReducer,
});

export default rootReducer;
