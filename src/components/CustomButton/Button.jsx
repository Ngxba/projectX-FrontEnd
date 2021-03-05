import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CustomTheme from '../../Theme/CustomTheme';

const LargeButton = withStyles({
  root: {
    WebkitTapHighlightColor: 'transparent',
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizelegibility',
    '-darkreaderNeutralBackground': '#141515',
    '-darkreaderNeutralText': '#d6d4d2',
    '-darkreaderSelectionBackground': '#004daa',
    '-darkreaderSelectionText': '#e8e6e3',
    '-chakraUiColorMode': 'light',
    fontFeatureSettings: '"kern"',
    lineHeight: '1.5',
    borderWidth: '0px',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    overflowWrap: 'break-word',
    borderColor: 'rgb(46, 54, 65)',
    textDecoration: 'inherit',
    textDecorationColor: 'inherit',
    display: 'inline-block',
    borderRadius: '4px',
    textAlign: 'center',
    padding: '25px 30px 22px 30px',
    fontSize: '1.125rem',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const CustomButton = (props) =>
{
  const { text, variant } = props;
  let button;

  switch (variant)
  {
    default:
      button = <Button variant="contained" color="primary">{text}</Button>;
      break;

    case 'default':
      button = <Button variant="contained" color="primary">{text}</Button>;
      break;

    case 'large':
      button = <LargeButton variant="contained" color="primary">{text}</LargeButton>;
      break;

    case 'cancel':
      button = <Button variant="contained" color="secondary">{text}</Button>;
      break;
  }

  return (
    <MuiThemeProvider theme={CustomTheme}>
      {button}
    </MuiThemeProvider>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default CustomButton;
