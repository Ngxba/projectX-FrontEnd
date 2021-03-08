import React from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import inputStyles from './Input.style';

function LayoutTextFields() {
  const classes = inputStyles();
  const handleChange = () => {};

  return (
    <div>
      <AppBar position="static" className={classes.allInput}>
        <Toolbar>
          <Button className={classes.buttonStyle} edge="start" aria-label="Search">
            <SearchIcon />
          </Button>

          <TextField
            className={classes.inputText}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Search..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default LayoutTextFields;
