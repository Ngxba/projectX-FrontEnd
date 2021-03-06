import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import Intro from './container/home/intro/intro';
import CustomButton from './components/Buttons/Button';
import CustomTheme from './Theme/CustomTheme';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <Intro />

        <CustomButton variant="large">
          Browse Thousands of Sneakers on our Live Marketplace
        </CustomButton>

        <br />

        <CustomButton variant="default">
          Default without variant
        </CustomButton>

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
