import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from "./Homework/UserInput";
import UserOutput from "./Homework/UserOutput";

class App extends Component{

    state = {
        persons: [
            {name: "Shibbir", age: 26},
            {name: "Ahmed", age: 28},
            {name: "Raihan", age: 27}
        ],
        homework: {
            username: "Shibbir"
        }
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked!')
        this.setState({
            persons: [
                {name: newName, age: 26},
                {name: "Ahmed", age: 28},
                {name: "Raihan", age: 27}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Rizwan", age: 26},
                {name: event.target.value, age: 30},
                {name: "Raihan", age: 26}
            ]
        })
    }

    userInputHandler = (event) => {
        this.setState({
            homework: {
                username: event.target.value
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


        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working</p>

                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Rizwan')}>Switch Name</button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Shibbir')}
                    changed={this.nameChangeHandler}
                >My Hobby is Coding </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />

                <div>
                    <UserInput username={this.state.homework.username} change={this.userInputHandler}/>
                    <UserOutput username={this.state.homework.username}/>
                </div>
            </div>
            // React.createElement('div', {
            //   className: 'App'
            // }, React.createElement('h1', null, 'I\'m a React App'))
        )
    }

}

export default App;


