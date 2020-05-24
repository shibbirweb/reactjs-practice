import React, {Component} from "react";
import TaskComponent from "./TaskComponent";

class TasksComponent extends Component {
    render() {
        let tasksLi = <li className="list-group-item text-center">No task available</li>

        if (this.props.tasks && this.props.tasks.length > 0) {
            tasksLi = this.props.tasks.map((task, index) => {
                task['index'] = index;
                return (
                    <TaskComponent {...task} key={index}
                                   onStatusChange={(event) => this.props.onStatusChange(event)}/>
                )
            })
        }

        return (
            <div className="row">
                <div className="col-12">
                    <h5 className="list-group-item text-center">Tasks</h5>
                    <ul className="list-group list-group-flush">
                        {tasksLi}

                        {/*<li className="list-group-item">
                            <input className="form-check-input" type="checkbox"/>
                            Cras justo odio
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox" defaultChecked={true}/>
                            <s>Dapibus ac facilisis in</s>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox"/>
                            Morbi leo risus
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox"/>
                            Porta ac consectetur ac
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox" disabled={true}/>
                            <form className="form-inline">
                                <input type="text" className="form-control form-control-sm"
                                       defaultValue="Vestibulum at eros"
                                       placeholder="Jane Doe"/>
                            </form>
                        </li>*/}

                    </ul>
                </div>
            </div>
        )
    }
}

export default TasksComponent;