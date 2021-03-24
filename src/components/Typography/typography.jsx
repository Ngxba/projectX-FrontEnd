// import { Typography } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import typoStyles from './typography.style';

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

const CustomTypography = (props) =>
{
  const {
    children,
    txtColor,
    txtStyle,
    txtType,
    txtComponent,
    className,
    ...rest
  } = props;

  const classes = typoStyles(rest);

  const classNameAll = `${classes.root} ${classes[txtStyle]} ${classes[txtType]} ${className}`;

  return (
    <React.Fragment key="typography">
      <Typography
        color={txtColor}
        component={txtComponent}
        className={classNameAll}
      >
        {children}
      </Typography>
    </React.Fragment>
  );
};

CustomTypography.propTypes = {
  children: PropTypes.node.isRequired,
  txtColor: PropTypes.oneOf(COLORS),
  txtStyle: PropTypes.oneOf(STYLES),
  txtType: PropTypes.oneOf(TYPES),
  txtComponent: PropTypes.oneOf(COMPONENTS),
  className: PropTypes.string,
};

CustomTypography.defaultProps = {
  txtColor: COLORS[0],
  txtStyle: STYLES[0],
  txtType: TYPES[0],
  txtComponent: COMPONENTS[0],
  className: "",
};

export default CustomTypography;
