import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

import { useTodoState } from '../../todo-context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  text: {
    paddingRight: theme.spacing(1),
    color: theme.palette.grey[600],
  },
}));

const DeleteSwitch = () => {
  const classes = useStyles();
  const { deleteMode, activateDeleteMode } = useTodoState();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.text}>
        Enable delete
      </Typography>
      <Switch
        checked={deleteMode}
        onChange={activateDeleteMode}
        name="DeleteSwitch"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};

export default DeleteSwitch;
