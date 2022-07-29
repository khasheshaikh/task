import React from "react";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  const [age, setAge] = useState(20);
  const [sibling, setsibling] = useState(4);
  const [name, setName] = useState("AGE");

  function toggle() {
    name == "AGE" ? setName("SIBILINGS") : setName("AGE");
    name == "AGE" ? setAge(age + 1) : setsibling(sibling + 1);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>
          Today i am <span className="span-1">{age}</span> years of age.{" "}
        </h2>
      </div>
      <div className="card">
        <h2>
          I have <span className="span-2">{sibling}</span> siblings.
        </h2>
      </div>
      <div className="button">
        <button className="btn" onClick={toggle}>
          {name}
        </button>
      </div>
    </div>
  );
};
