import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import buttonStyle from "./button.style";

const BG_COLORS = ["primary", "secondary"];

const SIZES = ["btn--medium", "btn--large", "btn--small"];

const VARIANTS = ["contained", "outlined", "text"];

const CustomButton = (props) => {
  const {
    children, variant, backgroundColor, buttonSize,
  } = props;

  const classes = buttonStyle();

  const className = `${classes.root} ${classes[buttonSize]}`;

  return (
    <React.Fragment key='button'>
      <Button
        color={backgroundColor}
        className={className}
        variant={variant}
      >
        {children}
      </Button>
    </React.Fragment>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(VARIANTS),
  backgroundColor: PropTypes.oneOf(BG_COLORS),
  buttonSize: PropTypes.oneOf(SIZES),
};

CustomButton.defaultProps = {
  variant: VARIANTS[0],
  backgroundColor: BG_COLORS[0],
  buttonSize: SIZES[0],
};

export default CustomButton;
