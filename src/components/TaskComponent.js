import React, {Component} from "react";

class TaskComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false
        }
    }

    render() {
        const {index, title, isCompleted} = this.props;

        const taskText = () => {
            if (this.state.isEdit) {
                return (
                    <form className="form-inline" onSubmit={(event) => {
                        event.preventDefault();

                        this.props.onTaskUpdate({
                            index: index,
                            data: {
                                title: event.target.task.value
                            }
                        })

                        this.setState({
                            isEdit: false
                        })
                    }}>
                        <input type="text" className="form-control form-control-sm"
                               name="task"
                               defaultValue={title}
                               placeholder="Enter task name"/>
                    </form>
                )
            } else {
                return (isCompleted) ? <s>{title}</s> : title
            }
        };

        return (
            <li className="list-group-item" onDoubleClick={() => {
                this.setState({
                    isEdit: true
                })
            }} onBlur={() => {
                this.setState({
                    isEdit: false
                })
            }}>
                <input className="form-check-input" type="checkbox" disabled={this.state.isEdit} onChange={() => {
                    this.props.onStatusChange({
                        index: index,
                        data: {
                            isCompleted: !isCompleted
                        }
                    })
                }} defaultChecked={isCompleted}/>

                {taskText()}
            </li>
        )
    }
}

export default TaskComponent;