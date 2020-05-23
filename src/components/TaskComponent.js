import React, {Component} from "react";

class TaskComponent extends Component {

    render() {
        const {title, isCompleted} = this.props;

        return (
            <li className="list-group-item">
                <input className="form-check-input" type="checkbox" defaultChecked={isCompleted}/>
                {(isCompleted) ? `<s>${title}</s>` : title}
            </li>
        )
    }
}

export default TaskComponent;