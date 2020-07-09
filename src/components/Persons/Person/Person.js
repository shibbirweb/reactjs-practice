import React from 'react'
import classes from './Person.module.css';


const person = (props) => {
    console.log('[Person.js] is render')
    return (
        <div className={classes.Person}>
            <p
                onClick={props.click}> I
                'm a {props.name} and I am {props.age} years old</p>
                
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default person;