import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Team from "./pages/team";
import Home from "./pages/home";
import Reference from "./pages/reference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reference" element={<Reference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
