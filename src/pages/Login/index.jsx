import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import { login } from '../../services/api/auth';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginForm = styled.form`
  margin: 5px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid lightGrey;
`;

const Field = styled.div`
  margin: 10px;
  padding: 0px;
  width: 300px;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [authenticating, setAuthenticating] = useState(false);

  const handleUsernameInput = (e) => setUsername(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthenticating(true);
    const user = await login(username, password);
    console.log('user in frontend', user);
    setAuthenticating(false);
  };
  return (
    <Page>
      <LoginForm>
        <Field>
          {/* <TextField
            error={false}
            variant="outlined"
            fullWidth
            label="Username"
            helperText={error}
          >
            <Input
              autoFocus
              id="Login-input-email"
              value={username}
              onChange={handleUsernameInput}
              className="login-ip"
            />
          </TextField>
        </Field>

        <Field>
          <TextField
            error={false}
            variant="outlined"
            fullWidth
            type="password"
            label="Password"
            helperText={error}
          >
            <Input
              id="Login-input-pw"
              type="password"
              autoComplete="off"
              value={password}
              onChange={handlePasswordInput}
              className="login-ip"
            />
          </TextField> */}
          <Field>
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsernameInput}
              value={username}
            />
          </Field>
          <Field>
            <input
              type="password"
              placeholder="Username"
              onChange={handlePasswordInput}
              value={password}
            />
          </Field>
        </Field>

        {authenticating ? (
          <CircularProgress />
        ) : (
          <Field>
            <Button
              id="Login-button-signin"
              variant="contained"
              fullWidth
              color="primary"
              unelevated="true"
              disabled={false}
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Field>
        )}
      </LoginForm>
    </Page>
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
