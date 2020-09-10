/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Section from './Section';
import timeSlotCalculation from '../../utils/time-categories';
import sectionNames from '../../constants';
import { useTodoState } from '../../todo-context/context';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 2,
    gridRow: 2,
    margin: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    height: '90vh',
  },
}));

const Main = () => {
  const classes = useStyles();
  const { todos, filteredUsers, userColours } = useTodoState();

  const timeSlots = timeSlotCalculation(todos);

  const overdue = timeSlots.overdue.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due1 = timeSlots.due1.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due2 = timeSlots.due2.filter((todo) => !filteredUsers.includes(todo.assignedTo));
  const due3 = timeSlots.due3.filter((todo) => !filteredUsers.includes(todo.assignedTo));

  return (
    <div className={classes.root}>
      <Section todos={overdue} title={sectionNames.section1} colours={userColours} />
      <Section todos={due1} title={sectionNames.section2} colours={userColours} />
      <Section todos={due2} title={sectionNames.section3} colours={userColours} />
      <Section todos={due3} title={sectionNames.section4} colours={userColours} />
    </div>
  );
};

export default Main;
