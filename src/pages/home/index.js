import React from "react";
import "./index.css";
import NavBar from "../../components/navbar";
import Title from "../../components/title";

const Home = () => {
  return (
    <div className="PAGES-home">
      <NavBar />
      <Title text="Project Octopus" />
    </div>
  );
};

export default Home;
