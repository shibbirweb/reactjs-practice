import React from "react";

import "./App.css";
import logo from "./logo.svg";
import AddForm from "./components/AddForm"
import Task from "./components/Task";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
        };

        this.addRecord = this.addRecord.bind(this)
        this.delRecord = this.delRecord.bind(this)
        this.fetchTasks = this.fetchTasks.bind(this)
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks(){
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
        this.setState({tasks: e})
    }

    render() {
        const tasks = this.state.tasks.map(task => <Task {...task} key={task.id} onUpdate={this.fetchTasks} onDel={this.delRecord}/>);
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
