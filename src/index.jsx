import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// const history = createBrowserHistory();

ReactDOM.render(
  <React.Fragment key="index">
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
