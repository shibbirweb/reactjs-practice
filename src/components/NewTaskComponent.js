import React, {Component} from "react";

class NewTaskComponent extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter task name"
                                   aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-dark" type="button" id="button-addon2">Save
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