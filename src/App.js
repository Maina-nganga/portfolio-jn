import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Project from './components/Project'
import "./App.css"
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
     <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contacts" element={<Contact />} />
    </Routes> 
  </Router>
  </ThemeProvider>
  
 
  
  );
}

export default App;
