/* eslint-disable no-undef */
const storageHandler = {
  save: (userInfo) => {
    const { token, username, workGroup } = userInfo.data.data;
    const user = { token, username, workGroup };
    localStorage.setItem('user', JSON.stringify(user));
  },
  getUserCredentials: () => JSON.parse(localStorage.getItem('user')),
  clear: () => localStorage.clear(),
};

export default storageHandler;
