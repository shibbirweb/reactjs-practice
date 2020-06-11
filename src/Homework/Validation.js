import React from "react";

const Validation = (props) => {

    const output = props.textlength >= 5 ? 'Text long enough' : 'Text is too short';

    return (
        <p>
            {output}
        </p>
    )
}

export default Validation;