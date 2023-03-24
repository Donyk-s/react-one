import React from 'react';
import ReactDOM from 'react-dom';
// const element1 = React.createElement('span', { children: 'Hello' });
// const element2 = React.createElement('span', { children: 'world' });
const element1 = <span>Hello</span>;
const element2 = <span>world</span>;
// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello world',
// });
const element = (
  <div>
    {element1}
    {element2}
  </div>
);
console.log(element);
// ReactDOM.render(element, document.querySelector('#root'));
// ========================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
