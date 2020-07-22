/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import timeSlotCalculation from '../../utils/time-categories';
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

  const timeSlots = timeSlotCalculation(todos);

  const overdue = timeSlots.overdue.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due1 = timeSlots.due1.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due2 = timeSlots.due2.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due3 = timeSlots.due3.filter((todo) => !filteredUsers.includes(todo.assignedTo));

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
