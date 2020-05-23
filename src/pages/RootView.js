import React, {Component, Fragment} from "react";
import NewTaskComponent from "../components/NewTaskComponent";
import HeaderTopComponent from "../components/HeaderTopComponent";
import TasksComponent from "../components/TasksComponent";

class RootView extends Component {

    constructor(props) {
        super(props);
        
        this.state = {}
        // init state method
        this.initState = this.initState.bind(this);
        // update state method
        this.addTask = this.addTask.bind(this);
    }

    // component mount method
    componentDidMount() {
        this.initState();
    }

    // init state
    initState() {
        this.setState({
            tasks: []
        })
    }

    // update state
    addTask(task) {
        const tasks = [...this.state.tasks, task]
        this.setState({
            tasks
        })
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
                                <NewTaskComponent onNewTask={this.addTask}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 py-3">
                                <TasksComponent tasks={this.state.tasks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RootView;