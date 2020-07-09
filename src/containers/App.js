import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



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
        showPersons: false
    }

    static getDerivedStateFromProps(props, state){
        
        console.log('[App.js] getDerivedStateFromProps', props);
        
        return state;
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
        
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


        this.setState({
            persons: persons
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
                <div className={classes.App}>
                    <Cockpit 
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons ={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />

                    {persons}
                </div>
        )
    }

}
export default App;

