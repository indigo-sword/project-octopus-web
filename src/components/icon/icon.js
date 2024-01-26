import React from "react";
import "./icon.css";

const Icon = ({ link, filename }) => {
  return (
    <a href={link}>
      <img
        src={`images/icons/${filename}.png`}
        altname={filename}
        className="icon"
        alt={`icon for ${filename}`}
      />
    </a>
  );
};

export default Icon;
