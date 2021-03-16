import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import ContentHeader from './container/content_header/content_header';
import Carousel from './container/carousel/carousel';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <ContentHeader
          bgImage="//stockx-assets.imgix.net/Core/homepage/hero_image_FW_2021.png?auto=compress,format"
        />

        <Carousel />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
