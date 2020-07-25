import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] is render");
    return (
      <Auxiliary>
      {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p> }

        <p key={"i1"} onClick={this.props.click}>
          I 'm a {this.props.name} and I am {this.props.age} years old
        </p>

        <p key={"i2"}> {this.props.children}</p>
        <input
          key={"i3"}
          //   ref={(inputEl) => {
          //       inputEl.focus();
          //   }}

          //   ref={(inputEl) => {
          //     this.inputElement = inputEl;
          //   }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}

// props validation
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default WithClass(Person, classes.Person);
