import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import TodoModal from '../todo-modal';

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

const AddTodo = ({ addTodo }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = async () => setOpen(true);
  // await addTodo(todoFake);
  const handleClose = async () => setOpen(false);

  return (
    <div className={classes.root}>
      <AddTodoBtn onClick={handleOpen}>
        <Typography variant="h6" className={classes.buttonText}>
          Todo
        </Typography>
        <AddCircleOutlineIcon />
      </AddTodoBtn>
      <TodoModal open={open} onClose={handleClose} addTodo={addTodo} />
    </div>
  );
};

export default AddTodo;
