import React from "react";
import CustomTypography from "../../../components/Typography/typography";
import introStyle from "./intro.style";

function Intro() {
  const classes = introStyle();
  return (
    <React.Fragment key="introHome">
      <div className={classes.center}>
        <CustomTypography txtColor="textPrimary" txtStyle="text--heading" txtType="text--bold" txtComponent="h1">
          Authentic Sneakers
        </CustomTypography>
        <CustomTypography txtStyle="text--link" txtComponent="a">
          See All
        </CustomTypography>
        <CustomTypography txtColor="textPrimary" txtStyle="text--title" txtType="text--bold" txtComponent="p">
          Most Popular
        </CustomTypography>
        <CustomTypography txtColor="textPrimary" txtStyle="text--category" txtType="text--bold" txtComponent="p">
          Addidas
        </CustomTypography>
        <CustomTypography txtColor="" txtStyle="" txtType="text--bold" txtComponent="p">
          Jordan 1 Retro High Silver Toe (W)
        </CustomTypography>
        <CustomTypography txtColor="textSecondary" txtStyle="text--primary" txtType="text--light" txtComponent="p">
          Lowest Ask
        </CustomTypography>
        <CustomTypography txtColor="textSecondary" txtStyle="text--secondary" txtType="text--light" txtComponent="p">
          1211 Sold
        </CustomTypography>
      </div>
    </React.Fragment>
  );
}

export default Intro;
