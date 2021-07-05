import React from "react";

const ButtonAddBacklogCard = ({ setShowForm }) => {
    const onAdd = (e) => {
        e.preventDefault();
        setShowForm(true);
    };

    return (
        <button className="button-add-card" onClick={onAdd}>
            + Add card
        </button>
    );
};

export default ButtonAddBacklogCard;