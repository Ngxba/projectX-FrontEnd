import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import ContentHeader from './container/content_header/content_header';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <ContentHeader />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
