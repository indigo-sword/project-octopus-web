import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ClickableText = ({ text, to, color }) => {
  return (
    <Link
      to={to}
      className="COMPONENTS-clickable-text"
      style={{ color: color }}
    >
      {text}
    </Link>
  );
};

export default ClickableText;
