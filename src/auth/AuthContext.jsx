/* eslint-disable no-undef */
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  getUserFromSession,
  login,
  logout,
  createUser,
} from '../services/api/auth';
import authReducer from './login-reducer';

const initialState = {
  authenticating: false,
  authenticated: false,
  error: '',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  /*
     Add methods for login, logout and authorise here,
     and pass to Login function
     Redirect to pages from here after login, logout and authorisation
  */
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { authenticated, authenticating, error } = state;
  // if authenticated navigate to main page

  const errorHandler = {
    400: 'Missing username or password missing',
    403: 'Incorrect username or password',
    500: 'Something bad happened, not your fault though',
  };

  useEffect(() => {
    getUserFromSession()
      .then((user) => {
        if (user) dispatch({ type: 'success' });
      });
  }, [authenticated]);

  const signIn = async (username, password) => {
    try {
      dispatch({ type: 'login' });
      const loginResult = await login(username, password);
      const { statusCode } = loginResult;
      if (statusCode !== 200) {
        dispatch({ type: 'error', payload: errorHandler[statusCode] });
        return;
      }
      dispatch({ type: 'success' });
    } catch (err) {
      // console.error('Errinho', err);
      dispatch({ type: 'error', payload: errorHandler[500] });
    }
  };

  // to do
  const signOut = async () => {
    await logout();
  };

  const signUp = async () => {
    await createUser();
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        authenticating,
        signIn,
        signUp,
        signOut,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const state = useContext(AuthContext);
  const {
    authenticated,
    authenticating,
    signIn,
    signOut,
    error,
  } = state;
  return {
    authenticated,
    authenticating,
    signIn,
    signOut,
    error,
  };
};
