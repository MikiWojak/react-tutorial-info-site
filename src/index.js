import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const page = (
  <div>
    <h1>My website in React</h1>

    <h3>Why React?</h3>
    <ul>
      <li>Composable</li>
      <li>Declarative</li>
      <li>Hireable</li>
      <li>Maintained</li>
    </ul>
  </div>
);

// document.getElementById('root').append(JSON.stringify(page))

ReactDOM.render(
  page,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
