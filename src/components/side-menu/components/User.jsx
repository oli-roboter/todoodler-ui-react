import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  check: {
    paddingLeft: 0,
  },
}));

const User = ({ username, filter }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    filter(username, checked);
  };

  return (
    <div className={classes.root}>
      <Checkbox
        className={classes.check}
        checked={checked}
        onChange={handleChange}
        // indeterminate
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Typography variant="body1">
        {username}
      </Typography>
    </div>
  );
};

export default User;
