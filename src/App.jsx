import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { Switch, BrowserRouter } from 'react-router-dom';
import LayoutDefault from './template/layout';
import CustomTheme from './theme';
import AppRoute from './utils/AppRoute';
import Home from './pages/home';
import LoginRegisterForm from './container/authen/login_register_form';
import Brand from './template/brand';
import product from './template/product';

function App()
{
  // let location = useLocation();
  return (
    <React.Fragment key="main">
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <AppRoute exact path="/" isMainPage component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={LoginRegisterForm} />
            <AppRoute exact path="/brand" component={Brand} layout={LayoutDefault} />
            <AppRoute
              exact
              path="/product"
              component={product}
              layout={LayoutDefault}
              isMainPage={false}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
