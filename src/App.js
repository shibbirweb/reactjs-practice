import React from "react";

import "./App.css";
import logo from "./logo.svg";
import AddForm from "./components/AddForm"

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
        };

        this.addRecord = this.addRecord.bind(this)
        this.delRecord = this.delRecord.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch("http://localhost:4000/tasks")
            .then((res) => res.json())
            .then((tasks) => this.setState({tasks}))
            .catch((error) => console.log(error));
    }

    addRecord(e) {
        /*const tasks = this.state.tasks;
        tasks.push(e)*/
        const tasks = [...this.state.tasks, e]
        this.setState({
            tasks: tasks
        })
    }

    delRecord(e) {
        const id = e.target.getAttribute("data-key");
        fetch(`http://localhost:4000/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                this.fetchData()
            })
            .catch(error => console.log(error))
    }

    render() {
        const tasks = this.state.tasks.map((task) => (
            <li key={task.id} className="list-group-item">
                {task.title} - {task.isCompleted} -{" "}
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm ml-2" data-key={task.id} onClick={this.delRecord}>Delete
                </button>
            </li>
        ));
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <AddForm addRec={this.addRecord}/>
                            <ul className="list-group">
                                <li className="list-group-item active">Tasks</li>
                                {tasks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
