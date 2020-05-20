import React, {Component, Fragment} from "react";
import NewTaskComponent from "../components/NewTaskComponent";
import HeaderTopComponent from "../components/HeaderTopComponent";
import TasksComponent from "../components/TasksComponent";

class RootView extends Component {

    render() {
        return (
            <Fragment>
                <div className="bg-dark py-2">
                    {/*Header top Component*/}
                    <div className="container-fluid">
                        <HeaderTopComponent/>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mt-1">
                                <NewTaskComponent/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 py-3">
                                <TasksComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RootView;