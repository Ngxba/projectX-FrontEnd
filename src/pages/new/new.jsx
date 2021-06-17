import React from "react";
import Container from "@material-ui/core/Container";
import newStyle from "./new.style";
import CustomTypography from "../../components/Typography/typography";

const News = () =>
{
  const classes = newStyle();
  return (
    <Container maxWidth="md" style={{ overflowX: "hidden" }}>
      <div className={classes.container}>
        <CustomTypography
          className={classes.headline}
          txtType="text--bold"
          txtComponent="h1"
        >
          Max Out
        </CustomTypography>
      </div>
    </Container>
  );
};

export default News;
