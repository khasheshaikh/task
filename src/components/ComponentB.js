// src/components/ComponentB.js
import React from "react";
import { useSelector } from "react-redux";

const ComponentB = () => {
  const { componentBVisible } = useSelector((state) => state);

  return (
    componentBVisible && (
      <div className="question">
        <div className="start">
          <p>Complete the sentence: "The capital of France is _____."</p>
          <input type="text" id="answer" name="answer" required />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    )
  ); 
};

export default ComponentB;
