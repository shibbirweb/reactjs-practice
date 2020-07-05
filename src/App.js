import React, {Component} from 'react';
import classes from './App.module.css';
//import Radium, {StyleRoot} from 'radium'
//import styled from 'styled-components'
import Person from './Person/Person';


/*const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`*/

class App extends Component {

    state = {
        persons: [
            {id: "i-1", name: "Shibbir", age: 26},
            {id: "i-2", name: "Ahmed", age: 28},
            {id: "i-3", name: "Raihan", age: 27}
        ],
        showPersons: false
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
        /*const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }*/

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            )

            /*style.backgroundColor = 'red'
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }*/

            btnClass = classes.Red;
        }

        //let classes = ['red', 'bold'].join(' ');
        const assignedClasses = [];

        if (this.state.persons.length <= 2){
            assignedClasses.push(classes.red) // classes = ['red']
        }
        if (this.state.persons.length <= 1){
            assignedClasses.push(classes.bold) // classes = ['red bold']
        }


        return (
            /*<StyleRoot>*/
                <div className={classes.App}>
                    <h1>Hi, I'm React App</h1>
                    <p className={assignedClasses.join(' ')}>This is really working</p>

                    <button className={btnClass}
                        onClick={this.togglePersonsHandler}

                    >Switch Name
                    </button>

                    {persons}
                </div>
            /*</StyleRoot>*/

            // React.createElement('div', {
            //   className: 'App'
            // }, React.createElement('h1', null, 'I\'m a React App'))
        )
    }

}

//export default Radium(App);
export default App;

