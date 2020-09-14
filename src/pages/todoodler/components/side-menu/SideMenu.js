/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { useTodoState } from '../../todo-context';

import sectionNames from '../../constants';

import Header from './Header';
import AddTodo from './AddTodo';
import User from './User';
import DeleteSwitch from './DeleteSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 1,
    gridRow: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid lightGrey',
    // backgroundColor: theme.palette.primary.light,
  },
  usersTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  users: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 400,
    fontSize: theme.typography.pxToRem(10),
    border: '1px solid #dadde9',
    borderRadius: '5px',
    padding: theme.spacing(1),
  },
}))(Tooltip);

// add memo
const Sidemenu = () => {
  const classes = useStyles();
  const {
    todos,
    users,
    onFilter,
    userColours,
  } = useTodoState();

  const userTodos = (username) => todos.filter((todo) => todo.assignedTo === username);

  const {
    section1, section2, section3, section4,
  } = sectionNames;
  const toolTipLabel = `${section1}|${section2}|${section3}|${section4}`;
  return (
    <aside className={classes.root}>
      <Header version="0.1.0" />
      <AddTodo />
      <DeleteSwitch />
      <Divider variant="fullWidth" />
      <span className={classes.usersTitle}>
        <Typography variant="h6">Users</Typography>
        <HtmlTooltip
          placement="right-start"
          arrow
          title={(
            <>
              <Typography
                color="inherit"
                variant="caption"
                align="center"
                paragraph={true}
              >
                Number of todos in each section
              </Typography>
              <Chip label={toolTipLabel} />
            </>
          )}
        >
          <Typography variant="subtitle1">Statistics</Typography>
        </HtmlTooltip>
      </span>
      <div className={classes.users}>
        {users.map(({ _id, username }) => (
          <User
            key={_id}
            username={username}
            userTodos={userTodos(username)}
            filter={onFilter}
            colour={userColours[username]}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidemenu;
