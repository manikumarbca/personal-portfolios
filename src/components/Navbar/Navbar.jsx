import React, { useState } from "react";
import logo from "../../Images/logo.png";
import './Navbar.css'

const Navebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="nav-bar" id="nav-bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left-nav">
       <a href="#home-hero"><img src={logo} alt="" /></a>
      </div>
        <div
          className={isMobile ? "right-nav-mobile nav-bars" : "nav-bars"}
          onClick={() => setIsMobile(!isMobile)}
        >
          <a href="#home-hero" className="home">
            Home
          </a>
          <a href="#about" className="about">
            About
          </a>
          <a href="#skills" className="skill">
            Skills
          </a>
          <a href="#projects" className="project">
            Projects
          </a>
          <a href="#experience" className="experience">
            Experinces
          </a>
          <a href="#contact" className="contact">
            Contact
          </a>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i class="bx bx-x"></i> : <i class="bx bx-menu"></i>}
        </button>
      </div>
  );
};

export default Navebar;
