import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
    marginLeft: theme.spacing(0.5),
    // backgroundColor: theme.palette.primary.light,
  },
  userTitle: {
    marginTop: theme.spacing(1),
  },
  buttonText: {
    paddingRight: theme.spacing(1),
  },
}));

const AddTodoBtn = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    '&:hover': {
      borderRadius: '5px',
      boxShadow: 'none',
    },
  },
}))(IconButton);

const AddTodo = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('creatin new todo');
  };

  return (
    <div className={classes.root}>
      <AddTodoBtn onClick={handleClick}>
        <Typography variant="h6" className={classes.buttonText}>
          Todo
        </Typography>
        <AddCircleOutlineIcon />
      </AddTodoBtn>
    </div>
  );
};

export default AddTodo;
