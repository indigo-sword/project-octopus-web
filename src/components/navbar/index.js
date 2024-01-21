import React from "react";
import ClickableText from "../clickableText";
import "./index.css";
import LogoHome from "../logoHome";

const NavBar = () => {
  return (
    <div className="COMPONENTS-navbar">
      <LogoHome />
      <ClickableText text="About" to="/about" color="#2e0673" />
      <ClickableText text="Reference" to="/reference" color="#2e0673" />
      <ClickableText text="Contact" to="/contact" color="#2e0673" />
    </div>
  );
};

export default NavBar;
