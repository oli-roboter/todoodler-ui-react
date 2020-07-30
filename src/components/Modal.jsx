import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid grey',
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    padding: theme.spacing(2),
    outline: 'none',
  },
}));

const ModalWithFade = ({ open, onClose, component }) => {
  const classes = useStyles();
  const Component = component;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} timeout={500}>
        <div className={classes.paper}>
          <Component onClose={onClose} />
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalWithFade;
