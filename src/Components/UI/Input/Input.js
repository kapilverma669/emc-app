import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    return(
        <input 
        className={classes.Input}
        type={props.type} 
        name={props.name}
        placeholder={props.placeholder}
        value = {props.value}
        onChange = {props.changed}></input>
    );
}

export default Input;