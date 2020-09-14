import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
  },
}));

const UserStats = ({ stats }) => {
  const classes = useStyles();
  const overdue = stats.overdue.length;
  const due1 = stats.due1.length;
  const due2 = stats.due2.length;
  const due3 = stats.due3.length;

  const text = `${overdue}|${due1}|${due2}|${due3}`;

  return (
    <Chip className={classes.root} label={text} size="small" />
  );
};

export default UserStats;
