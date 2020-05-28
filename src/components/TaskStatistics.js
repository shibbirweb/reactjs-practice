import React, {Component} from "react"

class TaskStatistics extends Component {

    render() {
        // total tasks
        const totalTasks = this.props.tasks.length;
        const completedTasks = this.props.tasks.filter(task => task.isCompleted).length;

        return (
            <div>
                <small>Task Completed: {completedTasks}/{totalTasks}</small>
            </div>
        )
    }

}

export default TaskStatistics;