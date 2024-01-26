import React from "react";
import { Link } from "react-router-dom";
import "./logoHome.css";

const LogoHome = () => {
  return (
    <Link to="/">
      <img src="octopus.jpg" alt="Logo" className="COMPONENTS-logo" />
    </Link>
  );
};

export default LogoHome;
