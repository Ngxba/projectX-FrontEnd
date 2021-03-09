import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomButton from './components/Buttons/button';
import CustomTheme from './Theme';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <CustomButton variant="contained" backgroundColor="primary" buttonSize="btn--large">
          Browse Thousands of Sneakers on our Live Marketplace
        </CustomButton>

        <br />

        <CustomButton variant="contained" backgroundColor="primary" buttonSize="btn--medium">
          Signup
        </CustomButton>

        <CustomButton variant="outlined" backgroundColor="primary" buttonSize="btn--small">
          BID
        </CustomButton>

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
