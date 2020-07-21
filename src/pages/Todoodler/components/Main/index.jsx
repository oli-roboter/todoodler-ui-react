/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
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

const Main = ({ todos, filteredUsers }) => {
  const classes = useStyles();

  const dateLimits = {
    now: moment(),
    limit1: moment().add(7, 'days'),
    limit2: moment().add(14, 'days'),
  };

  const overdue = todos.filter((todo) => dateLimits.now > moment(todo.dueDate)
    && !filteredUsers.includes(todo.assignedTo));

  const due1 = todos.filter((todo) => dateLimits.now <= moment(todo.dueDate)
    && moment(todo.dueDate) <= dateLimits.limit1
    && !filteredUsers.includes(todo.assignedTo));

  const due2 = todos.filter((todo) => dateLimits.limit1 <= moment(todo.dueDate)
    && moment(todo.dueDate) <= dateLimits.limit2
    && !filteredUsers.includes(todo.assignedTo));

  const due3 = todos.filter((todo) => dateLimits.limit2 < moment(todo.dueDate)
    && !filteredUsers.includes(todo.assignedTo));

  return (
    <div className={classes.root}>
      <Section todos={overdue} title="Fudeu" />
      <Section todos={due1} title="Almost Fudeu" />
      <Section todos={due2} title="Se cuida" />
      <Section todos={due3} title="Ta relax" />
    </div>
  );
};

export default Main;
