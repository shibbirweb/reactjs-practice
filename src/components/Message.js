// functional / stateless component
import React from "react";

function Message(props){
    return (<h2>Hello, {props.message}</h2>)
}

export default Message