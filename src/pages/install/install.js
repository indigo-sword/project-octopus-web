import React from "react";
import "./install.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Footer from "../../components/footer/footer";
import { Card } from "@mui/material";

const Install = () => {
  return (
    <div className="PAGES-reference">
      <NavBar />
      <Title text="Installing" />

      <Card
        className="PAGES-home-card"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignContent: "center",
          width: "90vw",
          height: "25vw",
          borderRadius: 8,
          backgroundColor: "#32035e",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            padding: 30,
            gap: 8,
          }}
        >
          <p>
            <b>Installing the game</b>
            <br />
            <br /> Unfortunately, our game is not ready yet to be compiled into
            an executable. However, we are eagerly working on it, and we will
            release it as soon as possible. Stay tuned on our{" "}
            <a href="https://discord.gg/pR48sxCSMf">Discord server</a>.
          </p>

          <p>
            <b>Installing to contribute</b>
            <br />
            <br /> If you want to contribute, just make sure you head to{" "}
            <a href="https://github.com/indigo-sword/project-octopus">
              our GitHub repo.
            </a>{" "}
            and download our code. Make sure to have the Godot game engine
            installed alongside the right python libraries (if you are running
            the server locally). If you have any questions, feel free to ask on
            our <a href="https://discord.gg/pR48sxCSMf">Discord server</a>.
          </p>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default Install;
