import React, {Component, Fragment} from "react";
import Jumbotron from "../layouts/Jumbotron";
import {Services} from "../layouts/Services";
import {ContactForm} from "../layouts/ContactForm";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Jumbotron/>
                    <Services/>
                    <ContactForm/>
                </div>
            </Fragment>
        )
    }
}

export default Home;