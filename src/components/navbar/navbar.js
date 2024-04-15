import React from "react";
import ClickableText from "../clickableText/clickableText";
import "./navbar.css";
import LogoHome from "../logoHome/logoHome";

const NavBar = () => {
  return (
    <div className="COMPONENTS-navbar">
      <LogoHome />
      <ClickableText text="Features" to="/reference" color="#91f095" />
      <ClickableText text="Install" to="/install" color="#91f095" />
      <ClickableText text="The Game" to="/game" color="#91f095" />
      <ClickableText text="About Us" to="/team" color="#91f095" />
      <ClickableText text="Contributing" to="/contributing" color="#91f095" />
    </div>
  );
};

export default NavBar;
