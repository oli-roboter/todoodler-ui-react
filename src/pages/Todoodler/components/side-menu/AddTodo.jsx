import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Modal from '../../../../components/Modal';
import AddTodoForm from '../todo-modal/AddTodoForm';

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
  const [open, setOpen] = useState(false);

  const handleOpen = async () => setOpen(true);
  const handleClose = async () => setOpen(false);

  return (
    <div className={classes.root}>
      <AddTodoBtn onClick={handleOpen}>
        <Typography variant="h6" className={classes.buttonText}>
          Todo
        </Typography>
        <AddCircleOutlineIcon />
      </AddTodoBtn>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <AddTodoForm onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default AddTodo;
