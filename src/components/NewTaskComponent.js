import React, {Component} from "react";

class NewTaskComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        this.props.onNewTask({
                            title: event.target.task.value,
                            isCompleted: false
                        })
                    }}>
                        <div className="input-group mb-3">
                            <input type="text" name="task" className="form-control" placeholder="Enter task name"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-dark" type="submit" id="button-addon2">Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTaskComponent;