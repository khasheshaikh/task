// src/components/ComponentA.js
import React from "react";
import "./Main.css"
import { useSelector } from "react-redux";

const ComponentA = () => {
  const { componentAVisible } = useSelector((state) => state);

  return (
    componentAVisible && (
      <div className="question">
        <div className="start">
          <p>What is the capital of France?</p>
          <input type="radio" id="option1" name="capital" value="paris" />
          <label for="option1">Paris</label>
          <br />
          <input type="radio" id="option2" name="capital" value="london" />
          <label for="option2">London</label>
          <br />
          <input type="radio" id="option3" name="capital" value="berlin" />
          <label for="option3">Berlin</label>
          <br />
          <input type="radio" id="option4" name="capital" value="rome" />
          <label for="option4">Rome</label>
          <br />
          <button className="submit" type="submit">Submit</button>
        </div>
      </div>
    )
  ); 
};

export default ComponentA;
