import React from 'react';

const Button = (props) => {

    return(
    <button onClick={props.clicked}>{props.buttonName}</button>
    );
}

export default Button;