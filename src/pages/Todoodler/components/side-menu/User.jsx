import React, { useState, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import timeSlotCalculator from '../../utils/time-categories';
import UserStats from './UserStats';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  check: {
    paddingLeft: 0,
  },
}));

const User = memo(({ username, userTodos, filter }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    filter(username, checked);
  };

  const userStats = timeSlotCalculator(userTodos);

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
      <Typography variant="body2">
        {username}
      </Typography>
      <UserStats stats={userStats} />
    </div>
  );
});

export default User;
