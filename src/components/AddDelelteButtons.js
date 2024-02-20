// src/components/AddDeleteButtons.js
import React from "react";
import "./Main.css"
import { useDispatch, useSelector } from "react-redux";
import { addComponent, deleteComponent } from "../store/actions";

const AddDeleteButtons = () => {
  const dispatch = useDispatch();
  const { componentAVisible, componentBVisible } = useSelector(
    (state) => state
  );

  const handleAddClick = () => {
    dispatch(addComponent());
  };

  const handleDeleteClick = () => {
    dispatch(deleteComponent());
  };

  return (
    <div className="main-container">
      <button
        className="Add"
        onClick={handleAddClick}
        disabled={componentBVisible && componentAVisible}
      >
        Add
      </button>
      <button
        onClick={handleDeleteClick}
        className="Subtract"
        disabled={!componentBVisible && !componentAVisible}
      >
        Delete
      </button>
    </div>
  );
};

export default AddDeleteButtons;
