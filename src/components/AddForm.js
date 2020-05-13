import React, {Component} from "react";

class AddForm extends Component {
    constructor() {
        super();

        this.addRecord = this.addRecord.bind(this);
    }

    addRecord(e) {
        e.preventDefault();
        fetch("http://localhost:4000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": Math.floor((Math.random() + 1) * 0x100000),
                "title": e.target.task.value,
                "isCompleted": "false"
            }),
        })
            .then(res => res.json())
            .then(result => this.props.addRec(result))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <form onSubmit={this.addRecord}>
                <div className="form-group">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Add new task"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Add Task"
                        className="btn btn-primary btn-block btn-sm"
                    />
                </div>
            </form>
        );
    }
}

export default AddForm;