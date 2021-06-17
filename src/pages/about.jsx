import React from "react";
import SimpleContainer from "../template/about/background";
import AboutGrid from "../template/about/about";
import StepMedia from "../template/about/image";
import FAQs from "../template/about/faqs";
import Instruction from "../template/about/instruction";
import ShopCategories from "../template/about/shop";

function About()
{
  return (
    <React.Fragment key="about">
      <SimpleContainer />
      <AboutGrid />
      <StepMedia />
      <Instruction />
      <FAQs />
      <ShopCategories />
    </React.Fragment>
  );
}

export default About;
