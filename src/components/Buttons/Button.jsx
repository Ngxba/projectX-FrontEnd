import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core';
import CustomTheme from '../../Theme/CustomTheme';
import LargeButton from './LargeButton';

const CustomButton = (props) =>
{
  const { children, variant } = props;
  let button;

  switch (variant)
  {
    default:
      button = <Button variant="contained" color="primary">{children}</Button>;
      break;

    case 'default':
      button = <Button variant="contained" color="primary">{children}</Button>;
      break;

    case 'large':
      button = <LargeButton variant="contained" color="primary">{children}</LargeButton>;
      break;

    case 'cancel':
      button = <Button variant="contained" color="secondary">{children}</Button>;
      break;
  }

  return (
    <MuiThemeProvider theme={CustomTheme}>
      {button}
    </MuiThemeProvider>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default CustomButton;
