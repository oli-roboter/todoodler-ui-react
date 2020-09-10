/* eslint-disable no-undef */
// import 'dotenv/config';
import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
import App from './App';
import { AuthProvider } from './auth/AuthContext';

const theme = createMuiTheme({
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
