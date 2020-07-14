/* eslint-disable no-undef */
import axios from 'axios';
import { AUTH } from '../../config';

const storageHandler = {
  save: (userInfo) => {
    const { token, username, workGroup } = userInfo.data.data;
    const user = { token, username, workGroup };
    localStorage.setItem('user', JSON.stringify(user));
  },
  get: (key) => localStorage.getItem(key),
  clear: () => localStorage.clear(),
};

export const login = async (username, password) => {
  const url = `${AUTH}/login`;
  try {
    const user = await axios.post(url, {
      username, password,
    });
    // console.log(user);
    storageHandler.save(user);
    return { data: user.data, statusCode: user.status };
  } catch (error) {
    // console.log('Erro:', error.response);
    return { error: error.response.data, statusCode: error.response.status };
  }
};

// export const authenticate = async () => {
//   const user = JSON.parse(storageHandler.get('user'));

//   if (!user) return false;

//   const { token, username } = user;
//   const url = `${AUTH}/authorise`;
//   const headers = { 'x-todo-token': token };
//   try {
//     const response = await axios.get(url, {
//       headers,
//       params: { username },
//     });
//     console.log('reponse from get requets', response);
//     return response.data;
//   } catch (error) {
//     console.error('ERRO NO REQUEST', error.response);
//     return error.response.data;
//   }
// };

export const getUserFromSession = async () => {
  const user = await JSON.parse(storageHandler.get('user'));
  if (!user) return false;
  return user;
};

export const logout = async () => {
  await storageHandler.clear();
  console.log('to do: get username and token from localstorage and validate at endpoint');
  return true;
};

export const createUser = async (username, password, workGroup) => {
  const url = `${AUTH}/signup`;
  try {
    const response = await axios.post(url, {
      username, password, workGroup,
    });
    return { data: response.data, statusCode: response.status };
  } catch (error) {
    return { error: error.response.data, statusCode: error.response.status };
  }
};
