import React, {Component} from "react";

class TasksComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h5 className="text-center">Tasks</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
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
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TasksComponent;