import "./App.css";
import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Team from "./pages/team/team";
import Home from "./pages/home/home";
import Install from "./pages/install/install";
import Reference from "./pages/reference/reference";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/install" element={<Install />} />
        <Route path="/reference" element={<Reference />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
