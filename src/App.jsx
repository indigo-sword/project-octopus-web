import "./App.css";
import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Team from "./pages/team/team";
import Home from "./pages/home/home";
import Install from "./pages/install/install";
import Reference from "./pages/reference/reference";
import Game from "./pages/game/game";
import Contributing from "./pages/contributing/contributing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/install" element={<Install />} />
        <Route path="/game" element={<Game />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/contributing" element={<Contributing />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
