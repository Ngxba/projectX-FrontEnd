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

const VARIANTS = ['outlined', 'standard', 'icon'];
const COLOR = ['default', 'gray'];
function CustomInput(props)
{
  const classes = inputStyles();
  const {
    placeholder, withIcon, variant, color,
  } = props;

  return (
    <div>
      {variant === 'standard' && (
        <Toolbar className={classes[color]}>
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
          className={`${classes.OutlineText} ${classes[color]}`}
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
  color: PropTypes.oneOf(COLOR),
};

CustomInput.defaultProps = {
  placeholder: '',
  variant: VARIANTS[0],
  withIcon: true,
  color: COLOR[0],
};

export default CustomInput;
