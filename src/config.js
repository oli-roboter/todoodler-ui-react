import dotenv from 'dotenv';

dotenv.config();

const AUTH = process.env.AUTH_BAKEND;
const TODO = process.env.TODO_BAKEND;
console.log('PROCESS ENV', process.env.AUTH_BAKEND);
// const AUTH = '127.0.0.1:8000';
// const TODO = '127.0.0.1:8001';

export {
  AUTH,
  TODO,
};
