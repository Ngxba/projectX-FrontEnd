import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import fakeStyle from './IconInput.style';

const IconInput = (props) =>
{
  const classes = fakeStyle();
  const { placeholder } = props;
  const [inputState, setInputState] = useState('');
  const [btnCloseState, setbtnCloseState] = useState('');
  const [btnSearchState, setbtnSearchState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () =>
  {
    if (inputState === '')
    {
      setInputState(classes.inputOpen);
      setTimeout(() =>
      {
        setbtnCloseState(classes.dpInlineBlock);
      }, 50);
      setbtnSearchState(classes.buttonFormOpen);
      setIsOpen(true);
    }
    else
    {
      setInputState('');
      setbtnCloseState('');
      setbtnSearchState('');
      setIsOpen(false);
    }
  };
  return (
    <React.Fragment key="iconInput">
      <div style={{ textAlign: 'right' }}>
        <div className={classes.formElement}>
          <span className={classes.formElementField}>
            <IconButton
              aria-label="search"
              color="inherit"
              onClick={handleChange}
              className={`${classes.btn} ${btnSearchState}`}
              disabled={isOpen}
            >
              <SearchIcon />
            </IconButton>
            {/* <input
              type='text'
              placeholder={placeholder}
              className={`${classes.inputPaddingRight} ${inputState}`}
            /> */}
            <InputBase type="text" className={`${classes.customInput} ${classes.inputPaddingRight} ${inputState}`} placeholder={placeholder} />
            <CloseIcon
              className={`${classes.btn} ${classes.buttonExit} ${btnCloseState}`}
              onClick={handleChange}
            />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

IconInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default IconInput;
