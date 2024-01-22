import React from "react";
import "./index.css";
import NavBar from "../../components/navbar";
import ButtonLink from "../../components/buttonLink";
import Title from "../../components/title";

const Reference = () => {
  return (
    <div className="PAGES-home">
      <NavBar />
      <Title />
      <ButtonLink text={"Hello"} to={"/about"} />
    </div>
  );
};

export default Reference;
