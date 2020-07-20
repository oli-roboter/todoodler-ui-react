/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getTodos } from '../../../../services/api/todo';
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

const Main = ({ todos }) => {
  const classes = useStyles();

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
