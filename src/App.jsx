import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Project";
import Certification from "./pages/Certification";
import Contacts from "./pages/Contacts";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certification />} />
          <Route path="/contactPage" element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
