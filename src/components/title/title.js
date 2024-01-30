import React from "react";
import "./title.css";

const Title = ({ text, color }) => {
  return <div className="COMPONENTS-title" style={{color:color}}>{text}</div>;
};

export default Title;
