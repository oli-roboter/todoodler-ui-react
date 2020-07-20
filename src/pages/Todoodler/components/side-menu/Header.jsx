import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    gridRow: 1,
    height: theme.spacing(8),
    borderBottom: '1px solid lightGrey',
  },
  text: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.5),
  },
  version: {
    marginLeft: theme.spacing(0.5),
  },
}));

export default function Header({ version }) {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.text}>
        <Typography variant="h6">Todoodler</Typography>
        <Typography className={classes.version} variant="body2">
          v
          {version}
        </Typography>
      </div>
    </header>
  );
}
