import React, { useState, useEffect } from 'react';
import { Redirect } from '@reach/router';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
}));

function Login() {
  const {
    signIn,
    authenticating,
    authenticated,
    error,
  } = useAuthState();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (e) => setUsername(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(username, password);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
            <Button
              disabled={authenticating}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              {authenticating ? 'Loging in...' : 'Sign In'}
            </Button>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
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
    </>
  );
}

Login.propTypes = {
  // signIn: PropTypes.func.isRequired,
  // email: PropTypes.string,
  // password: PropTypes.string,
  // onEmailChange: PropTypes.func.isRequired,
  // onPasswordChange: PropTypes.func.isRequired,
  // authenticating: PropTypes.bool,
  // authError: PropTypes.string
};

export default Login;
