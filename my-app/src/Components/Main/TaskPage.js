import React from "react";
import { Link } from "react-router-dom";
import close from "./close.png";

const TaskPage = ({ task }) => {
    return (
        <section className="task-page">
            <div className="task-page_container">
                <h1 className="task-name">{task.name}</h1>
                <p className="task-information">{task.information}</p>
                <p className="task-date">Add card {task.date}</p>
                <div className="task-close">
                    <Link to="/">
                        <img className="close" src={close} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TaskPage;
