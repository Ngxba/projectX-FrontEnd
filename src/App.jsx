import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from '@rehooks/local-storage';
import axios from 'axios';
import LayoutDefault from './template/layout';
import CustomTheme from './theme';
import AppRoute from './utils/AppRoute';
import Home from './pages/home';
import About from './pages/about';
import LoginRegisterForm from './container/authen/login_register_form';
import Brand from './template/brand/brand';
import Product from './template/product';
import Account from './template/account/account';
import NotFound from './pages/404';
import { GetIdentity } from './redux/actions/userActions';
import ScrollToTop from './components/ScrollTop/scroll_top';

function App()
{
  const dispatch = useDispatch();

  const [traits] = useLocalStorage('user_traits');

  if (traits)
  {
    const { token } = traits;
    // Set axios.defaults.headers.common.Authorization everytime user reload page
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    dispatch(GetIdentity(token));
  }

  return (
    <React.Fragment key="main">
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>

          {/* To scroll to top when route to other site */}
          <ScrollToTop />

          <Switch>
            <AppRoute
              exact
              path="/"
              isMainPage
              component={Home}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/about"
              component={About}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/login"
              component={LoginRegisterForm}
              layout={LayoutDefault}
            />
            <AppRoute exact path="/404" component={NotFound} layout={LayoutDefault} />
            <AppRoute
              path="/account"
              component={Account}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/product/:urlKey"
              component={Product}
              layout={LayoutDefault}
              isMainPage={false}
            />
            <AppRoute
              exact
              path="/brand/:category/:tag?/:tag2?/:tag3?/:tag4?/:tag5?"
              component={Brand}
              layout={LayoutDefault}
            />
            <Redirect exact from="/brand" to="/brand/sneakers" />
            <Redirect exact from="/product" to="/brand/sneakers" />
            <Redirect from="*" to="/404" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
