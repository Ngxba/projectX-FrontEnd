import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Intro from "./container/home/intro/intro";

function App() {
  return (
    <React.Fragment key="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Intro />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
