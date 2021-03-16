import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
// import App from './App';
import Navbar from './components/Navbar/navbar';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Navbar />
    {/* <App /> */}
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
