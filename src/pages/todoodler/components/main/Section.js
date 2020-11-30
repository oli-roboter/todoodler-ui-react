/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Todo from './Todo';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '85vh',
    overflow: 'scroll',
  },
});

function Section({ todos, title, colours }) {
  const classes = useStyles();
  return (
    <div>
      <Typography align="center" variant="h5" paragraph={true}>{title}</Typography>
      <div className={classes.root}>
        {todos.map(({ todoId, assignedTo, ...todo }) => (
          <Todo
            key={todoId}
            colour={colours[assignedTo]}
            todo={{ todoId, assignedTo, ...todo }}
          />
        ))}
      </div>
    </div>
  );
}

// function areTodosEqual(prevProps, nextProps) {
//   return prevProps.todos.length === nextProps.todos.length;
// }

// const MemoSection = React.memo(Section, areTodosEqual);

// export default MemoSection;

export default Section;
