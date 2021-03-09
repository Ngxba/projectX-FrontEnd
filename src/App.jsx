import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import Footer from './components/Footer/footer';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <Footer />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
