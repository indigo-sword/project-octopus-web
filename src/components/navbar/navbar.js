import React from "react";
import ClickableText from "../clickableText/clickableText";
import "./navbar.css";
import LogoHome from "../logoHome/logoHome";

const NavBar = () => {
  return (
    <div className="COMPONENTS-navbar">
      <LogoHome />
      <ClickableText text="Reference" to="/reference" color="#2e0673" />
      <ClickableText text="Install" to="/install" color="#2e0673" />
      <ClickableText text="About Us" to="/team" color="#2e0673" />
    </div>
  );
};

export default NavBar;
