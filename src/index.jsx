import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
