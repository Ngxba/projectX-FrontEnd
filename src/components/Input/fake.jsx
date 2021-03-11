import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import fakeStyle from './fake.style';

const FakeInput = () => {
  const classes = fakeStyle();
  const [inputState, setInputState] = useState('');
  const [btnCloseState, setbtnCloseState] = useState('');
  const [btnSearchState, setbtnSearchState] = useState('');
  const handleChange = () => {
    if (inputState === '') {
      setInputState(classes.inputOpen);
      setbtnCloseState(classes.dpInlineBlock);
      setbtnSearchState(classes.buttonFormOpen);
    } else {
      setInputState('');
      setbtnCloseState('');
      setbtnSearchState('');
    }
  };
  return (
    <React.Fragment key="fakeInput">
      <div style={{ textAlign: 'right' }}>
        <div className={classes.formElement} style={{ width: '500px' }}>
          <span className={classes.formElementField}>
            <IconButton
              aria-label="search"
              color="inherit"
              onClick={handleChange}
              className={`${classes.btn} ${btnSearchState}`}
            >
              <SearchIcon />
            </IconButton>
            <input
              type="text"
              placeholder="Search for article"
              className={`${classes.inputPaddingRight} ${inputState}`}
            />
            <IconButton
              aria-label="close"
              color="inherit"
              className={`${classes.btn} ${classes.buttonExit} ${btnCloseState}`}
              onClick={handleChange}
            >
              <CloseIcon />
            </IconButton>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FakeInput;
