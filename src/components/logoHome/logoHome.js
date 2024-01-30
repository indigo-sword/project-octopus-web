import React from "react";
import { Link } from "react-router-dom";
import "./logoHome.css";

const LogoHome = () => {
  return (
    <Link to="/">
      <img src="Octopus-Logo-v3.1 (1).png" alt="Logo" className="COMPONENTS-logo" />
    </Link>
  );
};

export default LogoHome;
