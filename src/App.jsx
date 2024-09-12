import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.css'
import Navebar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";


const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="main-container">
      <Navebar/>

      <div className="container">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
      
    </div>
  );
};

export default App;
