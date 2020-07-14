import React, { useState } from 'react';
import { Redirect, Link as RouterLink } from '@reach/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useAuthState } from '../../auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    marginTop: theme.spacing(1),
  },
  link: {
    color: '#3f51b5',
  },
}));

function SignUp() {
  const {
    signUp,
    loading,
    authenticated,
    signedup,
    error,
  } = useAuthState();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState('');

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleGroupInput = (e) => setGroup(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(username, password, group);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FaceIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={handleUsernameInput}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordInput}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="group"
              label="User Group"
              type="text"
              id="userGroup"
              value={group}
              onChange={handleGroupInput}
              autoComplete="current-password"
            />
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
            <Link
              component={RouterLink}
              variant="body2"
              to="/login"
            >
              Already have an account? Sign In
            </Link>
            {error && (
              <Typography
                className={classes.error}
                component="div"
                variant="body2"
                color="error"
              >
                {error}
              </Typography>
            )}
          </form>
        </div>
      </Container>
      {authenticated && <Redirect to="/" noThrow={true} />}
      {signedup && <Redirect to="/login" noThrow={true} />}
    </>
  );
}

export default SignUp;
