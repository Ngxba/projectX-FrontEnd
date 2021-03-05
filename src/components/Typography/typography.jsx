import { Typography } from "@material-ui/core";
import React from "react";
import typoStyles from "./typography.style";

function CustomTypography({ children, ...props }) {
  const {
    heading, variant, headingTop, headingBottom, normalText,
  } = props;
  const classes = typoStyles();
  return (
    <React.Fragment key="">
      {heading && headingTop && (
        <Typography
          className={`${classes.heading} ${classes.styleHeadingTop}`}
          variant={variant}
          component="h2"
        >
          {children}
        </Typography>
      )}
      {heading && headingBottom && (
        <Typography
          className={`${classes.heading} ${classes.styleHeadingBottom}`}
          variant={variant}
          component="h2"
        >
          {children}
        </Typography>
      )}
      {normalText && (
        <Typography
          variant={variant}
          component="p"
        >
          {children}
        </Typography>
      )}
    </React.Fragment>
  );
}

export default CustomTypography;
