import React from "react";
import "./contributing.css";
import NavBar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Footer from "../../components/footer/footer";
import { Box } from "@mui/material";

const Contributing = () => {
  return (
    <div className="PAGES-reference">
      <NavBar />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title text="Contributing" />
        <p>
          If you want to contribute, just make sure you head to our GitHub repos{" "}
          <a href="https://github.com/indigo-sword/project-octopus">
            project-octopus
          </a>{" "}
          and
          <a href="https://github.com/indigo-sword/godot-3.5"> godot-3.5 </a>
          and check our contributing part. We have almost no issues on
          project-octopus, but we really need both functional and asset
          contributions on godot-3.5.
          <br />
          <br />
          If you plan to help us in any way, get in touch with us on{" "}
          <a href="https://discord.gg/pR48sxCSMf">Discord server</a>.
        </p>
      </Box>

      <Footer />
    </div>
  );
};

export default Contributing;
