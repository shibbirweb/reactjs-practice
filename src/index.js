import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


// functional / stateless component
function Message(props){
    return (<h2>Hello, From stateless component</h2>)
}

// es6/ stateful Component
class MyApp extends React.Component{
    render(){
        return (
            <h2>Hello, From stateful component</h2>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <div>
        <Message/>
        <MyApp/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
