import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import {Footer} from "./components/layouts/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
