import React from "react";
import "./animation.css";

const Animation = () => {
  return (
    <div>
      <button className="hover-button">Hover Me</button>
      <div className="spinner" style={{marginTop:'40px'}}></div>
    </div>
  );
};

export default Animation;
