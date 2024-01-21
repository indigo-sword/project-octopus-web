import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
