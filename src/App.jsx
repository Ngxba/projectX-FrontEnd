import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import LoginRegisterForm from './container/authen/authen';
import CarouselWithTab from './container/tab_carousel/tab_carousel';

// import LoginScreen from './container/Login/login';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <LoginRegisterForm />

        <CarouselWithTab />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
