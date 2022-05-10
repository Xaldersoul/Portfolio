import React from "react";
import "./transition.css";

const Transition = ({ title }) => {
  return (
    <div className="transition">
      <h1 className="transition__text">{title}</h1>
    </div>
  );
};

export default Transition;
