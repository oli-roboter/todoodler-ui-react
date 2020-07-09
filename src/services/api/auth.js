import axios from 'axios';
import { AUTH } from '../../config';

export const login = async (username, password) => {
  const url = `${AUTH}/login`;
  console.log(username, password);
  try {
    const user = await axios.post(url, {
      username, password,
    });
    console.log('response from axios', user);
    return user.data;
  } catch (error) {
    return error.response.data;
  }
};

export const authenticate = () => {
  console.log('get username and token from localstorage and validate at endpoint');
  return true;
};

export const logout = () => {
  console.log('get username and token from localstorage and validate at endpoint');
  return true;
};
