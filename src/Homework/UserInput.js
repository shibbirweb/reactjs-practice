import React from "react";

const UserInput = (props) => {

    const style = {
        border: '2px solid red'
    }

    return (
        <input
            style={style}
            type="text"
            placeholder="Enter username"
            onChange={props.change}
            value={props.username}
        />
    )
}
export default UserInput;