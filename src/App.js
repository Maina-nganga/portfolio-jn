import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/home/huey/portfolio-jn/src/components/Navbar.js';
import Home from '/home/huey/portfolio-jn/src/components/Home.js';
import About from '/home/huey/portfolio-jn/src/components/About.js';
import Services from '/home/huey/portfolio-jn/src/components/Services.js';
import Contact from '/home/huey/portfolio-jn/src/components/Contact.js';
import Project from '/home/huey/portfolio-jn/src/components/Project.js'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> 
    </Router>
  );
}

export default App;
