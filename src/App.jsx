import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import LayoutDefault from "./template/layout";
import CustomTheme from "./theme";
import AppRoute from "./utils/AppRoute";
import Home from "./pages/home";
import About from "./pages/about";
import LoginRegisterForm from "./container/authen/login_register_form";
import Brand from "./template/brand/brand";
import product from "./template/product";
import NotFound from "./pages/404";
import { getIdentity } from './redux/actions/userActions';
import ScrollToTop from './components/ScrollTop/scroll_top';

function App() {
  // let location = useLocation();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-undef
  if (localStorage.getItem('token'))
  {
    // eslint-disable-next-line no-undef
    dispatch(getIdentity(localStorage.getItem('token')));
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
              exact
              path="/product/:urlKey"
              component={product}
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
