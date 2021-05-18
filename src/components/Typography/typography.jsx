/* eslint-disable react/jsx-one-expression-per-line */
import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import typoStyles from './typography.style';

const COLORS = ['textPrimary', 'textSecondary'];

const STYLES = [
  'text--default',
  'text--heading',
  'text--category',
  'text--title',
  'text--link',
  'text--primary',
  'text--secondary',
];

const TYPES = ['text--medium', 'text--light', 'text--bold'];

const COMPONENTS = ['p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const CustomTypography = (props) =>
{
  const {
    children,
    txtColor,
    txtStyle,
    txtType,
    txtComponent,
    className,
    href,
    ...rest
  } = props;

  const classes = typoStyles(rest);

  const classNameAll = `${classes.root} ${classes[txtStyle]} ${classes[txtType]} ${className}`;

  return (
    <React.Fragment key="typography">
      {href !== '' ? (
        <Link
          to={href}
          {...rest}
          className={classNameAll}
        >
          {children}
        </Link>
      ) : (
        <Typography
          {...rest}
          color={txtColor}
          component={txtComponent}
          className={classNameAll}
        >
          {children}
        </Typography>
      )}
    </React.Fragment>
  );
};

CustomTypography.propTypes = {
  children: PropTypes.node.isRequired,
  txtColor: PropTypes.string,
  txtStyle: PropTypes.oneOf(STYLES),
  txtType: PropTypes.oneOf(TYPES),
  txtComponent: PropTypes.oneOf(COMPONENTS),
  className: PropTypes.string,
  href: PropTypes.string,
};

CustomTypography.defaultProps = {
  txtColor: COLORS[0],
  txtStyle: STYLES[0],
  txtType: TYPES[0],
  txtComponent: COMPONENTS[0],
  className: '',
  href: '',
};

export default CustomTypography;
