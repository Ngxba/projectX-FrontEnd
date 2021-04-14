import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { Switch, BrowserRouter } from "react-router-dom";
import LayoutDefault from "./template/layout";
import CustomTheme from "./theme";
import AppRoute from "./utils/AppRoute";
import Home from "./pages/home";
import About from "./pages/about";
import Login from './container/authen/login_register_form';
import Brand from "./template/brand";
// import SimpleContainer from "./about/background";
// import AboutGrid from "./about/about";
// import StepMedia from "./about/image";
// import FAQs from "./about/faqs";
// import Instruction from "./about/instruction";
// import ShopCategories from "./about/shop";

function App() {
  // let location = useLocation();
  return (
    <React.Fragment key='main'>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <AppRoute
              exact
              path='/'
              isMainPage
              component={Home}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path='/about'
              component={About}
              layout={LayoutDefault}
            />
            <AppRoute exact path='/login' component={Login} />
            <AppRoute
              exact
              path='/brand'
              component={Brand}
              layout={LayoutDefault}
            />
          </Switch>
        </BrowserRouter>

        {/* <SimpleContainer />
        <AboutGrid />
        <StepMedia />
        <Instruction />
        <FAQs />
        <ShopCategories /> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
