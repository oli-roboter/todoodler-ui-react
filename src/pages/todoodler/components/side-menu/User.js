import React, { useState, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import Checkbox from '@material-ui/core/Checkbox';
import timeSlotCalculator from '../../utils/time-categories';
import UserStats from './UserStats';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  check: {
    paddingLeft: 0,
  },
  div: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  dot: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),
  },
  username: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
}));

const User = memo(({
  username, userTodos, filter, colour,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    filter(username, checked);
  };

  const userStats = timeSlotCalculator(userTodos);

  return (
    <div className={classes.root}>
      <div className={classes.div}>
        <Brightness1RoundedIcon className={classes.dot} size="small" style={{ color: colour }} />
        <Typography className={classes.username} variant="body2">
          {username}
        </Typography>
      </div>
      <div className={classes.div}>
        <UserStats stats={userStats} />
        <Checkbox
          className={classes.check}
          checked={checked}
          onChange={handleChange}
          // indeterminate
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    </div>
  );
});

export default User;
