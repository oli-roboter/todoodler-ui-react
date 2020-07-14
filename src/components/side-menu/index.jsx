import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import User from './components/User';

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: 1,
    gridRow: 2,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
  },
  addTodo: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  userTitle: {
    marginTop: theme.spacing(1),
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

  const handleClick = () => {
    console.log('creatin new todo');
  };

  return (
    <aside className={classes.root}>
      <div className={classes.addTodo}>
        <Typography variant="h6">
          Todo
        </Typography>
        <IconButton onClick={handleClick}>
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
      <Divider variant="fullWidth" />
      <Typography variant="h6" align="left" className={classes.userTitle}>
        Users
      </Typography>
      <User username="Peeta" filter={onFilter} />
      <User username="Benjamin Bunny" filter={onFilter} />
      <User username="Lily Bobtail" filter={onFilter} />
      <Divider variant="fullWidth" />
      <pre>{JSON.stringify(filteredUsers, null, 2)}</pre>

    </aside>
  );
};

export default Sidemenu;
