import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import CustomTheme from "./theme";
import CustomTypography from "./components/Typography/typography";
import Footer from "./components/Footer/footer";
import FooterNews from "./components/Footer/footer_news/footer_news";
import SocialMedias from "./components/Footer/social_medias/social_medias";
import SiteInformation from "./components/Footer/site_information/site_information";

function App() {
  return (
    <React.Fragment key='main'>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <CustomTypography>Hello World</CustomTypography>
        <Footer
          FooterNews={<FooterNews />}
          SiteInfo={<SiteInformation />}
          SocialMedias={<SocialMedias />}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
