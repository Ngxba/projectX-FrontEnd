import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import buttonStyle from './button.style';

const BG_COLORS = [
  'primary',
  'secondary',
];

const SIZES = [
  'btn--medium',
  'btn--large',
  'btn--small',
];

const VARIANTS = [
  'contained',
  'outlined',
  'text',
];

const CustomButton = (props) =>
{
  const {
    children,
    variant,
    backgroundColor,
    buttonSize,
  } = props;

  const checkVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const checkBackgroundColor = BG_COLORS.includes(backgroundColor) ? backgroundColor : BG_COLORS[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const classes = buttonStyle();

  const className = `${classes.root} ${classes[checkButtonSize]}`;

  return (
    <React.Fragment key="button">
      <Button
        color={checkBackgroundColor}
        className={className}
        variant={checkVariant}
      >
        {children}
      </Button>
    </React.Fragment>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(VARIANTS).isRequired,
  backgroundColor: PropTypes.oneOf(BG_COLORS).isRequired,
  buttonSize: PropTypes.oneOf([SIZES]).isRequired,
};

export default CustomButton;
