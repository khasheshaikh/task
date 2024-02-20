// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddDeleteButtons from "./components/AddDelelteButtons";
import ComponentA from "./components/ComponentA.js";
import ComponentB from "./components/ComponentB.js";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddDeleteButtons />
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
};

export default App;
