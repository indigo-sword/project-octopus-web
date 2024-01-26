import React from "react";
import "./image.css";

const Image = ({ src, alt, height, width}) => {
  return (
      <img className="COMPONENTS-image" src={src} alt={alt} style={{height: height, width: width}}></img>
  );
};

export default Image;
