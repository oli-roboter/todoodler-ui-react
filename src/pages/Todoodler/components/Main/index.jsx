/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getTodos } from '../../../../services/api/todo';
import Todo from './Todo';
import Section from './Section';
// import { useAuthState } from '../../auth/AuthContext';
const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 2,
    gridRow: 2,
    margin: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  // section: {
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 1fr 1fr 1fr',
  //   height: 90vh;
  // },
}));

const Main = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((todosFromServer) => {
        // console.log('Todos from server:', todosFromServer);
        setTodos(todosFromServer.data.data);
      });
  }, []);

  const overdue = todos.filter((todo) => Date.now() > todo.createdOn);
  const notOverdue = todos.filter((todo) => Date.now() <= todo.createdOn);

  return (
    <div className={classes.root}>
      <Section todos={overdue} title="Fudeu" />
      <Section todos={overdue} title="Almost Fudeu" />
      <Section todos={notOverdue} title="Se cuida" />
      <Section todos={notOverdue} title="Ta relax" />
    </div>
  );
};

export default Main;
