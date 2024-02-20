// src/store/actions.js
export const ADD_COMPONENT = "ADD_COMPONENT";
export const DELETE_COMPONENT = "DELETE_COMPONENT";

export const addComponent = () => ({
  type: ADD_COMPONENT,
});

export const deleteComponent = () => ({
  type: DELETE_COMPONENT,
});
