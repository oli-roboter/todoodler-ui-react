import React from 'react';
import { Router, Redirect } from '@reach/router';
import styled from 'styled-components';
import './assets/css/variables.css';
// import './assets/css/flex.css';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Todoodler from './pages/Todoodler';
import NotFound from './pages/NotFound';
import { useAuthState } from './auth/AuthContext';

const AppLayout = styled.section`
  margin: 0px;
  padding: 0px;
`;

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
  <AppLayout>
    <Router>
      <PrivateRoute
        as={Todoodler}
        path="/"
      />
      <SignUp path="/signup" />
      <Login path="/login" />
      <NotFound default />
    </Router>
  </AppLayout>
);

export default App;
