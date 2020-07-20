import axios from 'axios';
import { TODO } from '../../config';
import storageHandler from '../storageHandler';

export const getUserFromSession = async () => {
  const user = await storageHandler.getUserCredentials();
  if (!user) throw new Error('403: User not logged in');
  return user;
};

export const getTodos = async () => {
  const user = await getUserFromSession();

  const url = `${TODO}/todo`;
  const { token, username } = user;
  const headers = { 'x-todo-token': token };
  const queryParams = { func: 'all' };
  try {
    const response = await axios.get(url, {
      headers,
      params: { username, queryParams },
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    console.error('Erro', err.response);
    return { error: err.response.data, statusCode: err.response.status };
  }
};

export const addTodo = async (todo) => {
  const user = await getUserFromSession();
  const { token } = user;
  const headers = { 'x-todo-token': token };
  const url = `${TODO}/todo`;
  try {
    const response = await axios.post(url, todo, {
      headers,
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    console.error('Erro', err.response);
    return { error: err.response.data, statusCode: err.response.status };
  }
};
