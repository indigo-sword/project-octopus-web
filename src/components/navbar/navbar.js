import React from "react";
import ClickableText from "../clickableText/clickableText";
import "./navbar.css";
import LogoHome from "../logoHome/logoHome";

const NavBar = () => {
  return (
    <div className="COMPONENTS-navbar">
      <LogoHome />
      <ClickableText text="Reference" to="/reference" color="#51b015" />
      <ClickableText text="Install" to="/install" color="#51b015" />
      <ClickableText text="[Game]" to="/game" color="#51b015" />
      <ClickableText text="About Us" to="/team" color="#51b015" />
    </div>
  );
};

export default NavBar;
