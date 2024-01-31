import React from "react";
import "./title.css";

const Title = ({ text, color="white", fontSize="5vmin"}) => {
  return <div className="COMPONENTS-title" style={{color:color, fontSize:fontSize}}>{text}</div>;
};

export default Title;
