import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import CustomTheme from './theme';
import Footer from './components/Footer/footer';
import FooterNews from './components/Footer/footer_news/footer_news';
import newsData from './components/Footer/footer_news/data';
import infoData from './components/Footer/site_information/data';
import socialData from './components/Footer/social_medias/data';
import SiteInfo from './components/Footer/site_information/site_information';
import SocialMedias from './components/Footer/social_medias/social_medias';

function App()
{
  return (
    <React.Fragment key="main">

      <ThemeProvider theme={CustomTheme}>

        <CssBaseline />

        <Footer
          FooterNews={<FooterNews newsData={newsData} />}
          SiteInfo={<SiteInfo infoData={infoData} />}
          SocialMedias={<SocialMedias socialData={socialData} />}
        />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
