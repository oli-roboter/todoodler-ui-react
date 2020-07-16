import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTodos } from '../../../../services/api/todo';
// import { useAuthState } from '../../auth/AuthContext';
const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 2,
    gridRow: 2,
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Main = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((todosFromServer) => {
        console.log('Todos from server:', todosFromServer);
        setTodos([todosFromServer]);
      });
  }, []);

  return (
    <div className={classes.root}>
      <h1>Main app area</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default Main;
