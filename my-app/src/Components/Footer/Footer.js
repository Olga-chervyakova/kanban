import React from "react";

const Footer = ({activeTasks, finishedTasks}) => {
    return (
        <div className="footer">
            <div className="footer container">
                <p className="footer-task">Active tasks: {activeTasks}</p>
                <p className="footer-task">Finished tasks: {finishedTasks}</p>
            <div className="footer-author">
                <p>Kanban board by Chervyakova Olga, 2021</p>
            </div>
            </div>
        </div>
    );
};
export default Footer;