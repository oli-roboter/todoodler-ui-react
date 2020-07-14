import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import User from './components/User';

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

const Sidemenu = () => {
  const classes = useStyles();

  const [filteredUsers, setFilteredUsers] = useState([]);

  const onFilter = (username, checked) => {
    let users;
    if (checked) {
      users = [...filteredUsers];
      users.push(username);
    } else {
      users = filteredUsers.filter((user) => user !== username);
    }
    setFilteredUsers(users);
  };

  return (
    <aside className={classes.root}>
      <Header version="0.1.0" />
      <AddTodo />
      <Divider variant="fullWidth" />
      <div className={classes.users}>
        <Typography variant="h6">Users</Typography>
        <User username="Peeta" filter={onFilter} />
        <User username="Benjamin Bunny" filter={onFilter} />
        <User username="Lily Bobtail" filter={onFilter} />
      </div>
      <Divider variant="fullWidth" />
      <pre>{JSON.stringify(filteredUsers, null, 2)}</pre>
    </aside>
  );
};

export default Sidemenu;
