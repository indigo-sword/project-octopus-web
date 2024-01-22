import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Reference from "./pages/reference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Reference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
