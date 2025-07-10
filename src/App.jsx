import React from "react";
import "./index.css";
import Home from "./routes/home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/main";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
     
    </Routes>
    
    </Layout>
  );
}

export default App;
