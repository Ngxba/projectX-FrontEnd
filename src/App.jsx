import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import CustomTheme from "./theme";
import ContentHeader from "./container/content_header/content_header";
import Footer from "./components/Footer/footer";
import FooterNews from "./components/Footer/footer_news/footer_news";
import FooterInfo from "./components/Footer/site_information/site_information";
import SocialMedias from "./components/Footer/social_medias/social_medias";

function App() {
  return (
    <React.Fragment key='main'>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />

        <ContentHeader />
        <Footer
          FooterNews={<FooterNews />}
          SiteInfo={<FooterInfo />}
          SocialMedias={<SocialMedias />}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
