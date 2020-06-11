import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from "./Homework/Validation";
import CharComponent from "./Homework/CharComponent";

class App extends Component {

    state = {
        persons: [
            {id: "i-1", name: "Shibbir", age: 26},
            {id: "i-2", name: "Ahmed", age: 28},
            {id: "i-3", name: "Raihan", age: 27}
        ],
        showPersons: false,
        homework: {
            inputText: 'Something...'
        }
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

    // ============== Homework ======================
    homeworkInputChangeHandler = (event) => {
        this.setState({
            homework: {
                inputText: event.target.value
            }
        })
    }

    charComponentClickHandler = (index) => {
        const chars = [...this.state.homework.inputText];

        chars.splice(index, 1);

        //const updatedText =  Array.from(chars).join('');
        const updatedText = chars.join('');

        this.setState({
            homework: {
                inputText: updatedText
            }
        })
    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

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
        }

        // homework
        //const chars = [...this.state.homework.inputText];
        const chars = this.state.homework.inputText.split('')

        const charsComponents = chars.map((char, index) => {
            return (
                <CharComponent key={index} input={char} click={() => this.charComponentClickHandler(index)}/>
            )
        })


        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}

                >Switch Name
                </button>

                {persons}

                <h4>Homework</h4>
                <hr/>
                <div>
                    <input type="text" onChange={this.homeworkInputChangeHandler}
                           value={this.state.homework.inputText}/>

                    <p>Input Length: {this.state.homework.inputText.length}</p>

                    <Validation textlength={this.state.homework.inputText.length}/>

                    {charsComponents}
                </div>

            </div>
            // React.createElement('div', {
            //   className: 'App'
            // }, React.createElement('h1', null, 'I\'m a React App'))
        )
    }

}

export default App;


