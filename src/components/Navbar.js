import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Tasks from "./Pages/Tasks"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NoMatch from "./Pages/NoMatch"

class Navbar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/">React App</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home <span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tasks">Tasks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/tasks" component={Tasks}/>
                        <Route path="/about" component={About}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navbar;