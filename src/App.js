import React from 'react';
import { Router, Redirect } from '@reach/router';
import './assets/css/variables.css';
// import './assets/css/flex.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Todoodler from './pages/todoodler';
import NotFound from './pages/NotFound';
import { useAuthState } from './auth/AuthContext';

const PrivateRoute = ({
  /*
    add a roles check as well (see Bikus isAuthorized method)
    Put in own module
    redirect path as props
  */

  as: Component,
  ...props
}) => {
  const { authenticated } = useAuthState();
  // eslint-disable-next-line react/jsx-props-no-spreading
  if (authenticated) return <Component {...props} />;
  return <Redirect to="/login" noThrow="true" />;
};

const App = () => (
  <>
    <Router>
      <PrivateRoute
        as={Todoodler}
        path="/"
      />
      <SignUp path="/signup" />
      <Login path="/login" />
      <NotFound default />
    </Router>
  </>
);

export default App;
