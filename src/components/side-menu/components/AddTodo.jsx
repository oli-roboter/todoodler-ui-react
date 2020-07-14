import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 1,
    gridRow: '1 / span 2',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginLeft: theme.spacing(2),
    // backgroundColor: theme.palette.primary.light,
  },
  userTitle: {
    marginTop: theme.spacing(1),
  },
}));

const AddTodo = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('creatin new todo');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        Todo
      </Typography>
      <IconButton onClick={handleClick}>
        <AddCircleOutlineIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default AddTodo;
