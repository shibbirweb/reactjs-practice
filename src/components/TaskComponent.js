import React, {Component} from "react";

class TaskComponent extends Component {

    render() {
        const {index, title, isCompleted} = this.props;

        const taskText = (isCompleted) ? <s>{title}</s> : title;

        return (
            <li className="list-group-item">
                <input className="form-check-input" type="checkbox" onChange={() => {
                    this.props.onStatusChange({
                        index: index,
                        data: {
                            isCompleted: !isCompleted
                        }
                    })
                }} defaultChecked={isCompleted}/>
                {taskText}
            </li>
        )
    }
}

export default TaskComponent;