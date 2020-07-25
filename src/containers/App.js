import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from "../hoc/withClass"
import Auxiliary from "../hoc/Auxiliary"


class App extends Component {

    constructor(props){
        super(props);
        console.log('[App.js] constructor');        
    }


    state = {
        persons: [
            {id: "i-1", name: "Shibbir", age: 26},
            {id: "i-2", name: "Ahmed", age: 28},
            {id: "i-3", name: "Raihan", age: 27}
        ],
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    }

    static getDerivedStateFromProps(props, state){
        
        console.log('[App.js] getDerivedStateFromProps', props);
        
        return state;
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App.js] componentDidUpdate")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[App.js] shouldComponentUpdate")
        return true;
    }


    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(_person => _person.id === id);

        //const person = Object.assign({}, this.state.persons[personIndex])
        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;


        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        })
    }

    deletePersonHandler = (index) => {

        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];

        persons.splice(index, 1);

        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


    render() {

        console.log('[App.js] render')

        let persons = null;
        

        if (this.state.showPersons) {
            persons = (
                <Persons 
                        persons={this.state.persons}
                        clicked={ this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                />
            )
        }

        
        return (
            <Auxiliary classes={classes.App}>
                    <button onClick={() => (this.setState({showCockpit: false}))}>Remove Cockpit</button>
                    { this.state.showCockpit ?
                    <Cockpit 
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength ={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    /> : null }


                    {persons}
            </Auxiliary>
        )
    }

}
export default WithClass(App, classes.App);

