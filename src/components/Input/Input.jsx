import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
// import Collapse from '@material-ui/core/Collapse';
import inputStyles from './Input.style';

const VARIANTS = ['outlined', 'standard'];
function CustomInput(props) {
  const classes = inputStyles();
  const { placeholder, withIcon, variant } = props;
  // const handleChange = () => {};
  const checkVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div>
      {checkVariant === 'standard' && (
        <AppBar position="static" className={classes.allInput}>
          <Toolbar>
            {withIcon && (
              <Button
                className={classes.buttonStyle}
                edge="start"
                aria-label="Search"
              >
                <SearchIcon />
              </Button>
            )}
            <InputBase
              className={classes.inputText}
              style={{ margin: 8 }}
              placeholder={placeholder}
              // inputProps={{ "aria-label": "Search..." }}
            />
          </Toolbar>
        </AppBar>
      )}
      {checkVariant === 'outlined' && (
        <TextField
          className={classes.OutlineText}
          id="outlined-uncontrolled"
          placeholder={placeholder}
          fullWidth
          variant="outlined"
        />
      )}
      {/* {withIcon && <br />}
      <div style={{ display: 'flex' }}>
        <Button
          className={classes.buttonStyle}
          edge="start"
          aria-label="Search"
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <SearchIcon />
        </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit style={{ display: 'inline-block' }}>
          <InputBase
            className={classes.inputText}
            style={{ margin: 8 }}
            placeholder={placeholder}
            variant={checkVariant}
          // inputProps={{ "aria-label": "Search..." }}
          />
        </Collapse> */}
    </div>
  );
}

CustomInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  withIcon: PropTypes.bool.isRequired,
};

export default CustomInput;
