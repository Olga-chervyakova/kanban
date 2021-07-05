import React, { useState, useContext } from "react";
import ButtonAddBacklogCard from "./ButtonAddBacklogCard";
import { AppContext } from "./Main";

const AddTaskToBacklogForm = () => {
    const { addTaskBacklog } = useContext(AppContext);

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [information, setInformation] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            document.querySelector(".add-task-form_input-name").style.border =
                "2px red solid";
            if (!information) {
                document.querySelector(
                    ".add-task-form_input-information"
                ).style.border = "2px red solid";
            }
            return;
        }

        if (!information) {
            document.querySelector(
                ".add-task-form_input-information"
            ).style.border = "2px red solid";
            if (!name) {
                document.querySelector(".add-task-form_input-name").style.border =
                    "2px red solid";
            }
            return;
        }

        const id = Math.floor(Math.random() * 10000) + 1;
        const date = new Date();
        addTaskBacklog({ id, date: date.toLocaleString(), name, information });

        setName("");
        setInformation("");

        setShowForm(false);
    };

    return (
        <>
            {showForm ? (
                <form className="add-task-form" onBlur={onSubmit} onSubmit={onSubmit}>
                    <h3 className="add-task-title">Add Task:</h3>
                    <input
                        className="add-task-form_input add-task-form_input-name"
                        type="text"
                        placeholder="Name task"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() =>
                            (document.querySelector(
                                ".add-task-form_input-name"
                            ).style.border = "1px solid #0079bf")
                        }
                    />
                    <input
                        className="add-task-form_input add-task-form_input-information"
                        type="text"
                        placeholder="Information task"
                        value={information}
                        onChange={(e) => setInformation(e.target.value)}
                        onFocus={() =>
                            (document.querySelector(
                                ".add-task-form_input-information"
                            ).style.border = "1px solid #0079bf")
                        }
                    />
                    <input type="submit" value="Submit" className="button-submit" />
                </form>
            ) : (
                <ButtonAddBacklogCard setShowForm={setShowForm} />
            )}
        </>
    );
};

export default AddTaskToBacklogForm;