import dotenv from 'dotenv';

dotenv.config();

const AUTH = process.env.AUTH_BAKEND;
const TODO = process.env.TODOODLER_BACKEND;

export {
  AUTH,
  TODO,
};
