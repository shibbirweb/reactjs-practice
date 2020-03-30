// es6/ stateful Component
import React, {Component} from "react";

class MyApp extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <h2>Hello, {this.props.message}</h2>
        )
    }
}

export default MyApp;