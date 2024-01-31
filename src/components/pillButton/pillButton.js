import React from "react";
import { Link } from "react-router-dom";
import "./pillButton.css";

const pillButton = ({ to, text }) => {
  return (
    <button className="COMPONENTS-pill-button">    
        <Link to={to} className="COMPONENTS-button-link">
        {text}
        </Link>
    </button>
  );
};

export default pillButton;