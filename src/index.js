import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import MyApp from "./components/MyApp";
import Message from "./components/Message";


ReactDOM.render(
  <React.StrictMode>
    <div>
        <Message message="From props"/>
        <MyApp message="From ES6 Component Props"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
