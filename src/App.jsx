import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { Switch, BrowserRouter } from "react-router-dom";
import LayoutDefault from "./container/layout";
import CustomTheme from "./theme";
import AppRoute from "./utils/AppRoute";
import Home from "./pages/home";

function App() {
  // let location = useLocation();
  return (
    <React.Fragment key='main'>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <AppRoute exact path='/' component={Home} layout={LayoutDefault} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
