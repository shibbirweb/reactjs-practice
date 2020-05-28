import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
