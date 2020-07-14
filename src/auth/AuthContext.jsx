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
  loading: false,
  authenticated: false,
  error: '',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const {
    user,
    authenticated,
    signedup,
    loading,
    error,
  } = state;

  const errorHandler = {
    400: 'Missing username or password',
    409: 'User already exists',
    500: 'Something bad happened, not your fault though',
  };

  useEffect(() => {
    getUserFromSession()
      .then((sessionUser) => {
        if (sessionUser) dispatch({ type: 'login success', payload: sessionUser.username });
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
      dispatch({ type: 'login success' });
    } catch (err) {
      // console.error('Errinho', err);
      dispatch({ type: 'error', payload: errorHandler[500] });
    }
  };

  const signOut = async () => {
    await logout();
    dispatch({ type: 'logout' });
  };

  const signUp = async (username, password, group) => {
    try {
      dispatch({ type: 'login' });
      const signupResult = await createUser(username, password, group);
      const { statusCode } = signupResult;
      if (statusCode !== 201) {
        dispatch({ type: 'error', payload: errorHandler[statusCode] });
        return;
      }
      dispatch({ type: 'signup success' });
    } catch (err) {
      // console.error('Errinho', err);
      dispatch({ type: 'error', payload: errorHandler[500] });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        signedup,
        loading,
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
    user,
    authenticated,
    signedup,
    loading,
    signIn,
    signUp,
    signOut,
    error,
  } = state;
  return {
    user,
    authenticated,
    signedup,
    loading,
    signIn,
    signUp,
    signOut,
    error,
  };
};
