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
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
});

// CHECK IF memo CAN BE USED TO PREVENT THIS COMPONENT FROM RERENDERING IF NOTHING HAS CHANGED
function Section({ todos, title }) {
  const classes = useStyles();
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      {todos.map(({
        todoId, author, assignedTo, dueDate, importance, text, detail, colour,
      }) => (
        <Todo
          key={todoId}
          author={author}
          assignedTo={assignedTo}
          dueDate={dueDate}
          importance={importance}
          text={text}
          detail={detail}
          colour={colour}
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
