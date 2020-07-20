import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import AddTodo from './AddTodo';
import User from './User';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 1,
    gridRow: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid lightGrey',
    // backgroundColor: theme.palette.primary.light,
  },
  users: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

const Sidemenu = ({ users, filteredUsers, filter }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <Header version="0.1.0" />
      <AddTodo />
      <Divider variant="fullWidth" />
      <div className={classes.users}>
        <Typography variant="h6">Users</Typography>
        {users.map(({ _id, username }) => <User key={_id} username={username} filter={filter} />)}
      </div>
      <Divider variant="fullWidth" />
      <pre>{JSON.stringify(filteredUsers, null, 2)}</pre>
    </aside>
  );
};

export default Sidemenu;
