import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";


const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
  </div>;
};

export default App;

// Route

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nyariapa from "./pages/Nyariapa";
// {/* <Router>
//   <Navbar />
//   <Routes>
//     <Route path="/" element={<Hero />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/project" element={<Project />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="*" element={<Nyariapa />} />
//   </Routes>
// </Router>; */}
