import React from "react";
import "./reference.css";
import NavBar from "../../components/navbar/navbar";
import Image from "../../components/image/image";
import Footer from "../../components/footer/footer";
import { Box } from "@mui/material";

const Reference = () => {
  return (
    <div className="PAGES-install">
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
        <Image
          src="illustration.png"
          alt="project illustration"
          height="60vh"
        />
        <p>
          This is an example of how we want the game to function to users. They
          can play different paths with each node of the path habing a level
          some other user created. If you want to check how all of this works,
          alongside with the implementation, please check{" "}
          <a href="https://github.com/indigo-sword/project-octopus">
            our GitHub repo
          </a>{" "}
          to see some documentation.
        </p>
      </Box>
      <Footer />
    </div>
  );
};

export default Reference;
