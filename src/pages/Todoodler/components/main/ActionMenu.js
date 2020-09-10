import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ActionMenu = ({
  handleClose, anchorEl, openCard, markAsComplete,
}) => (
  <div>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={openCard}>Edit card</MenuItem>
      <MenuItem onClick={markAsComplete}>Mark as completed</MenuItem>
    </Menu>
  </div>
);

export default ActionMenu;
