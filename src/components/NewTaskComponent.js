import React, {Component} from "react";

class NewTaskComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            task: event.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        this.props.onNewTask({
                            title: this.state.task,
                            isCompleted: false
                        })

                        this.setState({
                            task: ''
                        })
                    }}>
                        <div className="input-group mb-3">
                            <input type="text" name="task" value={this.state.task}  onChange={this.handleChange} className="form-control" placeholder="Enter task name"/>
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