import React, { Component } from 'react'
import Person from "./Person/Person"


class Persons extends Component{

    /*static getDerivedStateFromProps(props, state){
        console.log("[Persons.js] getDerivedStateFromProps")
        return state;
    }*/

    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log("[Persons.js] componentWillReceiveProps")
    }*/

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[Persons.js] ShouldComponentUpdate")
        //return true;
        if (nextProps.persons !== this.props.persons){
            return true;
        }else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate")
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Persons.js] Component did mount")
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log("[Persons.js] ComponentWillUnmount")
    }


    render() {
        console.log('[Persons.js] rendering...')

        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            />

        })
    }
}


export default Persons;