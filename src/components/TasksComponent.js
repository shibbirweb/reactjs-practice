import React, {Component} from "react";

class TasksComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h5 className="text-center">Tasks</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TasksComponent;