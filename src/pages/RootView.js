import React, {Component, Fragment} from "react";
import NewTaskComponent from "../components/NewTaskComponent";
import HeaderTopComponent from "../components/HeaderTopComponent";
import TasksComponent from "../components/TasksComponent";

class RootView extends Component {

    constructor(props) {
        super(props);

        // init state
        this.state = {
            tasks: []
        }
    }

    render() {
        return (
            <Fragment>
                <div className="bg-dark py-2">
                    {/*Header top Component*/}
                    <div className="container-fluid">
                        <HeaderTopComponent/>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mt-1">
                                <NewTaskComponent onNewTask={(task) => {
                                    const tasks = [...this.state.tasks, task]
                                    this.setState({
                                        tasks
                                    })
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 py-3">
                                <TasksComponent
                                    tasks={this.state.tasks}

                                    onStatusChange={({index, data}) => {
                                        const task = this.state.tasks[index];

                                        task.isCompleted = data.isCompleted

                                        const tasks = this.state.tasks;

                                        tasks.splice(index, 1, task)

                                        this.setState({tasks})
                                    }}

                                    onTaskUpdate={({index, data}) => {
                                        const tasks = this.state.tasks;
                                        const task = this.state.tasks[index];
                                        task.title = data.title;
                                        tasks.splice(index, 1, task);
                                        this.setState(tasks)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RootView;