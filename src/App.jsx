<<<<<<< Updated upstream
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { Switch, BrowserRouter } from "react-router-dom";
import LayoutDefault from "./container/layout";
import CustomTheme from "./theme";
import AppRoute from "./utils/AppRoute";
import Home from "./pages/home";
=======
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  // let location = useLocation();
  return (
    <React.Fragment key='main'>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
<<<<<<< Updated upstream
        <BrowserRouter>
          <Switch>
            <AppRoute exact path='/' component={Home} layout={LayoutDefault} />
          </Switch>
=======

        {/* <Navbar /> */}
        
        <BrowserRouter>
          <Route path="/" component={Navbar}></Route>
          <Route path="/view" component></Route>
>>>>>>> Stashed changes
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
