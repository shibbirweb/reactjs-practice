import React, {Component, Fragment} from "react"

class Task extends Component {

    constructor(props) {
        super(props);

        this.delRecord = this.delRecord.bind(this)
        this.editRecord = this.editRecord.bind(this)
        this.updateRecord = this.updateRecord.bind(this)

        this.state = {
            isEdit: false
        }
    }

    delRecord(e) {
        const id = e.target.getAttribute("data-key");
        fetch(`http://localhost:4000/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                fetch("http://localhost:4000/tasks")
                    .then((res) => res.json())
                    .then((tasks) => this.props.onDel(tasks)
                    )
                    .catch((error) => console.log(error));
            })
            .catch(error => console.log(error));
    }

    editRecord() {
        this.setState({isEdit: true})
    }

    updateRecord(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/tasks/${e.target.id.value}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: e.target.task.value
            })
        })
            .then(() => {
                this.setState({isEdit: false})
                fetch('http://localhost:4000/tasks')
                    .then(res => res.json())
                    .then(tasks => this.props.onUpdate(tasks))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    render() {
        const {id, title, isCompleted} = this.props;

        const task = (this.state.isEdit) ?
            <form onSubmit={this.updateRecord}>
                <input type="hidden" name="id" defaultValue={id}/>
                <div className="form-group">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Update task"
                        defaultValue={title}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Task"
                        className="btn btn-primary btn-block btn-sm"
                    />
                </div>
            </form>
            :
            <li key={id} className="list-group-item">
                {title} - {isCompleted} -{" "}
                <button className="btn btn-primary btn-sm" onClick={this.editRecord}>Edit</button>
                <button className="btn btn-danger btn-sm ml-2" data-key={id} onClick={this.delRecord}>Delete
                </button>
            </li>;

        return (
            <Fragment>
                {task}
            </Fragment>
        )
    }

}

export default Task