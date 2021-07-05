import React from "react";
import AddTaskToBacklogForm from "./AddTaskToBacklogForm";
import AddTaskToOthers from "./AddTaskToOthers";
import { Link } from "react-router-dom";

const TaskContainer = ({ title, children, tasksToChoose, addTaskTo }) => {
    return (
        <div className="task-container">
            <h2 className="task-container-title">{title}</h2>
            <div className="tasks-form">
                {children && children.length > 0 && (
                    <ul className="tasks">
                        {children.map((task) => {
                            return (
                                <Link className="task" to={`tasks/${task.id}`}>
                                    <li key={task.id}>{task.name}</li>
                                </Link>
                            );
                        })}
                    </ul>
                )}
                {title === "Backlog" ? (
                    <AddTaskToBacklogForm />
                ) : (
                    <AddTaskToOthers
                        tasksToChoose={tasksToChoose}
                        addTaskTo={addTaskTo}
                    />
                )}
            </div>
        </div>
    );
};

export default TaskContainer;