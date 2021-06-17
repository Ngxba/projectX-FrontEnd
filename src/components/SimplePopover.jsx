import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import * as PropTypes from 'prop-types';

const SimplePopover = ({ activateComponent: ActivateComponent, children }) =>
{
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) =>
  {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () =>
  {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      {/* Wrapper fake button to handle onClick
      instead of passing by props from ActivateComponent */}
      <div
        role="button"
        tabIndex={0}
        style={{
          // Remove default button styles
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }}
        aria-describedby={id}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <ActivateComponent />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

SimplePopover.propTypes = {
  activateComponent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SimplePopover;
