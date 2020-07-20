import React, { Component, Fragment } from 'react'
import classes from './Person.module.css';
import Auxiliary from "../../../hoc/Auxiliary"

class Person extends Component {
    render() {
        console.log('[Person.js] is render')
        return (
            <Fragment>
                <p key={"i1"}
                    onClick={this.props.click}> I
                    'm a {this.props.name} and I am {this.props.age} years old</p>

                <p key={"i2"}> {this.props.children}</p>
                <input key={"i3"} type="text" onChange={this.props.changed} value={this.props.name}/>
            </Fragment>
        )
    }
}
export default Person;