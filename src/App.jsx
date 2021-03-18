import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import CustomTypography from './components/Typography/typography';

function App() {
  return (
    <React.Fragment key="main">
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <CustomTypography>Hello World</CustomTypography>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
