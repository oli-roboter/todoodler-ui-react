/* eslint-disable no-undef */
import axios from 'axios';
import { AUTH } from '../../config';
import storageHandler from '../storageHandler';

export const login = async (username, password) => {
  const url = `${process.env.AUTH_BACKEND}/login`;
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
//   const user = storageHandler.getUserCredentials();

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
  const user = await storageHandler.getUserCredentials();
  if (!user) return false;
  return user;
};

export const logout = async () => {
  /*
    clears the user from local storage -> prevents user from using UI to interact with backend
    clears token from backend -> prevents any API calls using the user token
    If axios request fails, user will be logged out of UI, but token will still be valid,
    until user logs in again
  */
  const url = `${AUTH}/login`;
  const user = await getUserFromSession();
  const { token, username } = user;
  const headers = { 'x-todo-token': token };
  await storageHandler.clear();
  try {
    await axios.delete(url, {
      headers,
      data: { username },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erro:', error.response);
  }
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
