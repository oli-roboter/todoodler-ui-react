import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  check: {
    paddingLeft: 0,
  },
}));

const UserStats = ({ stats }) => {
  const classes = useStyles();
  const overdue = stats.overdue.length;
  const due1 = stats.due1.length;
  const due2 = stats.due2.length;
  const due3 = stats.due3.length;

  return (
    <div className={classes.root}>
      <Typography variant="body2">
        {overdue}
      </Typography>
      <Typography variant="body2">
        {due1}
      </Typography>
      <Typography variant="body2">
        {due2}
      </Typography>
      <Typography variant="body2">
        {due3}
      </Typography>
    </div>
  );
};

export default UserStats;
