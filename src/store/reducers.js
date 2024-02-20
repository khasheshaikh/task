// src/store/reducers.js
import { ADD_COMPONENT, DELETE_COMPONENT } from "./actions";

const initialState = {
  componentAVisible: false,
  componentBVisible: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      if (!state.componentAVisible) {
        return { ...state, componentAVisible: true };
      } else if (!state.componentBVisible) {
        return { ...state, componentBVisible: true };
      }
      return state;
    case DELETE_COMPONENT:
      if (state.componentBVisible) {
        return { ...state, componentBVisible: false };
      } else if (state.componentAVisible) {
        return { ...state, componentAVisible: false };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
