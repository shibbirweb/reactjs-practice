// es6/ stateful Component
import React, {Component} from "react";
import Message from "./Message";
import Login from "./Login"
import Logout from "./Logout"

class MyApp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message: 1,
            status: true
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
        let status;
        if (this.state.status === true){
            status = <Logout/>
        }else {
            status = <Login/>
        }

        return (
            <div>
                <Message message="From stateless component"/>
                <h2>Hello, {this.state.message}</h2>
                <button onClick={this.updateState}>Update State</button>

                {status}
            </div>
        )
    }
}

export default MyApp;