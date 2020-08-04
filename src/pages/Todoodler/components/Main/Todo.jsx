/* eslint-disable no-return-await */
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalWithFade from '../../../../components/Modal';
import EditTodoForm from '../todo-modal/EditTodoForm';
import { useTodoState } from '../../todo-context';

const hoverGrey = grey[100];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    width: 150,
    '&:hover': {
      background: hoverGrey,
      cursor: 'pointer',
    },
  },
  title: {
    marginBottom: theme.spacing(0.5),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  dot: {
    margin: theme.spacing(0),
    padding: theme.spacing(0.5),
  },
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  shaky: {
    border: '1px solid red',
  },
}));

export default function SimpleCard({ colour, todo }) {
  const classes = useStyles();
  const { deleteMode, removeTodo } = useTodoState();
  const { text, detail, assignedTo } = todo;
  const [open, setOpen] = useState(false);
  const openCard = () => setOpen(true);
  const closeCard = () => setOpen(false);

  const { todoId } = todo;

  const deleteCard = async () => await removeTodo({ todoId });

  const clickFunctionality = () => (deleteMode ? deleteCard : openCard);

  const cardFormat = () => {
    if (deleteMode) return `${classes.root} ${classes.shaky}`;
    return `${classes.root}`;
  };

  return (
    <>
      <Card className={cardFormat()} onClick={clickFunctionality()}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {text}
          </Typography>
          <Typography variant="body2" component="p">
            {detail}
          </Typography>
        </CardContent>
        <div className={classes.flex}>
          <Brightness1RoundedIcon className={classes.dot} size="small" style={{ color: colour }} />
          <Typography className={classes.username} variant="body2">
            {assignedTo}
          </Typography>
        </div>
      </Card>
      <ModalWithFade
        open={open}
        onClose={closeCard}
      >
        <EditTodoForm todo={todo} onClose={closeCard} />
      </ModalWithFade>
    </>
  );
}
