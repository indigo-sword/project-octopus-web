import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../images/octopus.jpg";
import "./index.css";

const LogoHome = () => {
  return (
    <Link to="/">
      <img src={Icon} alt="Logo" className="COMPONENTS-logo" />
    </Link>
  );
};

export default LogoHome;
