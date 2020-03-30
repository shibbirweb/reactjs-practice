// es6/ stateful Component
import React, {Component} from "react";

class MyApp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message: 1
        };

        // method bind
        this.updateState = this.updateState.bind(this)
    }

    updateState(){
        this.setState({
            message: this.state.message + 1
        })
    }
    render(){
        return (
            <div>
                <h2>Hello, {this.state.message}</h2>
                <button onClick={this.updateState}>Update State</button>
            </div>
        )
    }
}

export default MyApp;