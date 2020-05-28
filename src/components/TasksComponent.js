import React, {Component} from "react";
import TaskComponent from "./TaskComponent";
import TaskStatistics from "./TaskStatistics";

class TasksComponent extends Component {
    render() {
        let tasksLi = <li className="list-group-item text-center">No task available</li>

        if (this.props.tasks && this.props.tasks.length > 0) {
            tasksLi = this.props.tasks.map((task, index) => {
                task['index'] = index;
                return (
                    <TaskComponent {...task} key={index}
                                   onStatusChange={(event) => this.props.onStatusChange(event)}
                                   onTaskUpdate={(event) => this.props.onTaskUpdate(event)}
                                   onTaskDelete={(event) => this.props.onTaskDelete(event)}
                    />
                )
            })
        }

        return (
            <div className="row">
                <div className="col-12">
                    <h5 className="list-group-item text-center">Tasks</h5>
                    <TaskStatistics tasks={this.props.tasks}/>
                    <ul className="list-group list-group-flush">
                        {tasksLi}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TasksComponent;