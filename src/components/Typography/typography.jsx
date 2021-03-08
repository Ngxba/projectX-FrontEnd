// import { Typography } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';
import typoStyles from "./typography.style";

const COLORS = [
  'textPrimary',
  'textSecondary',
];

const STYLES = [
  'text--default',
  'text--heading',
  'text--category',
  'text--title',
  'text--link',
  'text--primary',
  'text--secondary',
];

const TYPES = [
  'text--medium',
  'text--light',
  'text--bold',
];

const COMPONENTS = [
  'p',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

const CustomTypography = (props) => {
  const {
    children, txtColor, txtStyle, txtType, txtComponent,
  } = props;

  const checkTxtColor = COLORS.includes(txtColor) ? txtColor : COLORS[0];

  const checkTxtStyle = STYLES.includes(txtStyle) ? txtStyle : STYLES[0];

  const checkTxtTypes = TYPES.includes(txtType) ? txtType : "";

  const checkTxtComponents = COMPONENTS.includes(txtComponent) ? txtComponent : COMPONENTS[0];

  const classes = typoStyles();

  const className = `${classes.root} ${classes[checkTxtStyle]} ${classes[checkTxtTypes]}`;

  return (
    <React.Fragment key="typography" className={className}>
      <Typography
        color={checkTxtColor}
        component={checkTxtComponents}
        className={className}
      >
        {children}
      </Typography>
    </React.Fragment>
  );
};

CustomTypography.propTypes = {
  children: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  txtStyle: PropTypes.string.isRequired,
  txtType: PropTypes.string.isRequired,
  txtComponent: PropTypes.string.isRequired,
};

export default CustomTypography;
