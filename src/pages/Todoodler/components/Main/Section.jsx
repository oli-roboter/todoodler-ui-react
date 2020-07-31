import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Todo from './Todo';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});

function Section({ todos, title, colours }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      {todos.map(({ todoId, assignedTo, ...todo }) => (
        <Todo
          key={todoId}
          colour={colours[assignedTo]}
          todo={{ todoId, assignedTo, ...todo }}
        />
      ))}
    </div>
  );
}

function areTodosEqual(prevProps, nextProps) {
  return prevProps.todos.length === nextProps.todos.length;
}

const MemoSection = React.memo(Section, areTodosEqual);

export default MemoSection;
