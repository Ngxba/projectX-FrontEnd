/* eslint-disable no-underscore-dangle */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./redux/reducers";
import App from "./App";

// const history = createBrowserHistory();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <React.Fragment key='index'>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  // eslint-disable-next-line no-undef
  document.getElementById("root"),
);
