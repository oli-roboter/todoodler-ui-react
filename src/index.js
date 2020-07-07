// import 'dotenv/config';
import test from './components/test';
import './main.css';
import React from "react";
import ReactDOM from "react-dom";

const title = 'React with webpack and Babel';

ReactDOM.render(
  <div>{test.map(w => <p>{w}</p>)}</div>,
  document.getElementById('root')
);

// console.log(process.env.MY_SECRET);