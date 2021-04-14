import React from "react";
import SimpleContainer from "./about/background";
import AboutGrid from "./about/about";
import StepMedia from "./about/image";
import FAQs from "./about/faqs";
import Instruction from "./about/instruction";
import ShopCategories from "./about/shop";

function about() {
  return (
    <React.Fragment key="main">
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <SimpleContainer />
        <AboutGrid />
        <StepMedia />
        <Instruction />
        <FAQs />
        <ShopCategories />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default about;
