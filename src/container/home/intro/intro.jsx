import React from "react";
import CustomTypography from "../../../components/Typography/typography";
import introStyle from "./intro.style";

function Intro() {
  const classes = introStyle();
  return (
    <React.Fragment key="introHome">
      <div className={classes.center}>
        <CustomTypography heading headingTop>
          Buy & Sell
        </CustomTypography>
        <CustomTypography heading headingBottom>
          Authentic Sneakers
        </CustomTypography>
        <CustomTypography normalText>
          Authentic Sneakers
        </CustomTypography>
      </div>
    </React.Fragment>
  );
}

export default Intro;
