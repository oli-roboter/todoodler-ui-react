import axios from 'axios';
import { TODO } from '../../config';
import storageHandler from '../storageHandler';

// export a function and get rid of the getUserFromSession in all functions
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
  const { token, username, workGroup } = user;
  todo.author = username;
  todo.workGroup = workGroup;
  const headers = { 'x-todo-token': token };
  const url = `${TODO}/todo`;
  try {
    const response = await axios.post(url, { username, ...todo }, {
      headers,
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    console.error('Erro', err.response);
    return { error: err.response.data, statusCode: err.response.status };
  }
};

export const patchTodo = async ({ todoId, changes }) => {
  const user = await getUserFromSession();
  const { token, username } = user;
  const headers = { 'x-todo-token': token };
  const url = `${TODO}/todo/${todoId}`;
  try {
    const response = await axios.patch(url, { username, changes }, {
      headers,
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    console.error('Erro', err.response);
    return { error: err.response.data, statusCode: err.response.status };
  }
};

export const deleteTodo = async ({ todoId }) => {
  const user = await getUserFromSession();
  const { token, username } = user;
  const headers = { 'x-todo-token': token };
  const url = `${TODO}/todo/${todoId}`;
  try {
    const response = await axios.delete(url, {
      headers,
      data: { username },
      params: { func: 'byId', arg: todoId },
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    console.error('Erro', err.response);
    return { error: err.response.data, statusCode: err.response.status };
  }
}