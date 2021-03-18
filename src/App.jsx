import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import LoginScreen from './container/Login/login';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <LoginScreen />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
