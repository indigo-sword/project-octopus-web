import React from "react";
import "./clickableText.css";
import { Link } from "react-router-dom";

const ClickableText = ({ text, to, color, size }) => {
  return (
    <Link
      to={to || "/"}
      className="COMPONENTS-clickable-text"
      style={{ color: color || "black", fontSize: size || "3vh" }}
    >
      {text}
    </Link>
  );
};

export default ClickableText;
