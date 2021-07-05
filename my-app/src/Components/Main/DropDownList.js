import React, { useState } from "react";

const DropDownList = ({
                      tasksToChoose,
                      selected,
                      setSelected,
                      selectedId,
                      setSelectedId,
                  }) => {
    const [displayLists, setDisplayLists] = useState(false);

    const handleClick = () => {
        setDisplayLists(!displayLists);
    };

    const handleListClick = (e) => {
        setSelected(e.target.dataset.name);
        setSelectedId(e.target.dataset.id);
        setDisplayLists(false);
        document.querySelector(".add-task-dropdown").style.border =
            "1px #0079bf solid";
    };

    return (
        <div className="add-task-dropdown_container">
            <div className="add-task-dropdown" onClick={handleClick}>
                <span data-id={selectedId}>{selected || "Select task"}</span>
            </div>
            {displayLists && (
                <ul className="add-task-dropdown_lists">
                    {tasksToChoose.map((task) => (
                        <li
                            className="add-task-dropdown_lists-list"
                            key={task.id}
                            data-id={task.id}
                            data-name={task.name}
                            onClick={handleListClick}
                        >
                            {task.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDownList;