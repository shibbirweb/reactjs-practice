import React, { Component } from 'react'
import classes from './Person.module.css';
import Auxiliary from "../../../hoc/Auxiliary"
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] is render')
        return (
            <Auxiliary>
                <p key={"i1"}
                    onClick={this.props.click}> I
                    'm a {this.props.name} and I am {this.props.age} years old</p>

                <p key={"i2"}> {this.props.children}</p>
                <input key={"i3"} type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxiliary>
        )
    }
}
export default withClass(Person, classes.Person);