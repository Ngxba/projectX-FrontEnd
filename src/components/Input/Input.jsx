import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import IconInput from './IconInput';
// import Collapse from '@material-ui/core/Collapse';
import inputStyles from './Input.style';

const VARIANTS = ['standard', 'outlined', 'icon'];
const BG_COLOR = ['white', 'gray'];
function CustomInput(props)
{
  const {
    placeholder, withIcon, variant, bgColor, width,
  } = props;
  const classes = inputStyles({ width });

  return (
    <div className={classes.general}>
      {variant === 'standard' && (
        <Toolbar className={classes[bgColor]} style={{ minHeight: '48px' }}>
          {withIcon && (
            <Button
              className={classes.buttonStyle}
              edge="start"
              aria-label="Search"
              disabled
            >
              <SearchIcon />
            </Button>
          )}
          <InputBase className={classes.inputText} placeholder={placeholder} />
        </Toolbar>
      )}
      {variant === 'outlined' && (
        <TextField
          className={`${classes.OutlineText} ${classes[bgColor]}`}
          id="outlined-uncontrolled"
          placeholder={placeholder}
          fullWidth
          variant="outlined"
        />
      )}
      {variant === 'icon' && <IconInput placeholder={placeholder} />}
    </div>
  );
}

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(VARIANTS),
  withIcon: PropTypes.bool,
  bgColor: PropTypes.oneOf(BG_COLOR),
  width: PropTypes.string,
};

CustomInput.defaultProps = {
  placeholder: '',
  variant: VARIANTS[0],
  withIcon: true,
  bgColor: BG_COLOR[0],
  width: '',
};

export default CustomInput;
