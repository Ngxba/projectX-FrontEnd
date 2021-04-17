import React from "react";
import CustomInput from "../../components/Input/Input";
import CustomTypography from "../../components/Typography/typography";
import posterHomeStyle from "./posterHome.style";

const PosterHome = () =>
{
  const classes = posterHomeStyle();
  return (
    <React.Fragment key="poster">
      <div className={classes.root} style={{ textAlign: "center" }}>
        <CustomTypography
          fontSize="7rem"
          color="white"
          style={{ opacity: "0.6" }}
        >
          HEY YOU!
        </CustomTypography>
        <div className={classes.block}>
          <CustomTypography color="white" fontSize="2rem">
            Psst.. we have something to tell you.
          </CustomTypography>
          <br />
          <CustomTypography color="white" fontSize="20px" txtType="text--light">
            You might have noticed that we have been adding special sneakers to
            the catalogue, products like Nike, Jordan and Adidas Yeezy. Plus
            there is a lot more coming. We are really excited to share these
            releases with our readers and invite you to sign up for our
            newsletter to get the latest news on our expansion.
          </CustomTypography>
        </div>
        <br />
        <CustomInput width="100%" withIcon={false} placeholder="Your Comment Hereee!" />
      </div>
    </React.Fragment>
  );
};

export default PosterHome;
