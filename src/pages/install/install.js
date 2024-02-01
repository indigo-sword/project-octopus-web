import React from "react";
import "./install.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Footer from "../../components/footer/footer";

const Install = () => {
  return (
    <div className="PAGES-reference">
      <NavBar />
      <Title text="Install" />
      <p>
      To get started locally you should have a few things:

      Node.js installed.
      Either npm or another package manager like yarn or pnpm.
      A working knowledge of React. You don't need to be an expert, but you should be comfortable with the basics.
      First, spin up a new React project however you like; we recommend using Vite but the choice is yours.
      </p>
      <Footer />
    </div>
  );
};

export default Install;
