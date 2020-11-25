import axios from 'axios';
import { AUTH } from '../../config';
import storageHandler from '../storageHandler';

export const getUserFromSession = async () => {
  const user = await storageHandler.getUserCredentials();
  if (!user) throw new Error('403: User not logged in');
  return user;
};

export const getWorkGroupUsers = async () => {
  const user = await getUserFromSession();

  const url = `${AUTH}/users`;
  const { token, username } = user;
  const headers = { 'x-todo-token': token };
  try {
    const response = await axios.get(url, {
      headers,
      params: { username },
    });
    return { data: response.data, statusCode: response.status };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Getting Workgroup Users', err);
    return { error: err.response.data, statusCode: err.response.status };
  }
};
