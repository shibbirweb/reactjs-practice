import React from "react";

import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/tasks")
      .then((res) => res.json())
      .then((tasks) => this.setState({ tasks }))
      .catch((error) => console.log(error));
  }

  render() {
    const tasks = this.state.tasks.map((task) => (
      <li key={task.id} className="list-group-item">
        {task.title} - {task.isCompleted} -{" "}
        <button className="btn btn-primary btn-sm">Edit</button>
      </li>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
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
