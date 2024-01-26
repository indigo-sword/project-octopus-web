import React from "react";
import "./line.css";

const Line = ({ color }) => {
  color = color || "white";

  return (
    <div className="COMPONENTS-line" style={{ backgroundColor: color }}></div>
  );
};

export default Line;
