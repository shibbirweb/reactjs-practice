import React from 'react'
import classes from './Person.module.css';
//import Radium from "radium";


const person = (props) => {

    /*
    //for radium
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/


    return (
        /*<div className="Person" /!*style={style}*!/>*/
        <div className={classes.Person}>
            < p
                onClick={props.click}> I
                'm a {props.name} and I am {props.age} years old</p>
            < p> {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

//export default Radium(person);
export default person;