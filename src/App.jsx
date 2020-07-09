import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import './assets/css/variables.css';
// import './assets/css/flex.css';
import Login from './pages/Login';
import Todoodler from './pages/Todoodler';
import NotFound from './pages/NotFound';

const AppLayout = styled.section`
  margin: 0px;
  padding: 0px;
`;

const App = () => (
  <AppLayout>
    <Router>
      <Todoodler path="/" />
      <Login path="/login" />
      <NotFound default />
    </Router>
  </AppLayout>
);

export default App;
