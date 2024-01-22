import React from "react";
import ClickableText from "../clickableText";
import "./index.css";
import LogoHome from "../logoHome";

const NavBar = () => {
  return (
    <div className="COMPONENTS-navbar">
      <LogoHome />
      <ClickableText text="Reference" to="/reference" color="#2e0673" />
      <ClickableText text="Team" to="/team" color="#2e0673" />
    </div>
  );
};

export default NavBar;
