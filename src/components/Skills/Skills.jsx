import React from 'react'
import './Skills.css'
import htmlImage from '../../Images/html.png'
import cssImage from '../../Images/css.png'
import jImage from '../../Images/javascript.png'
import reactImage from '../../Images/react.png'

const Skills = () => {
  return (
    <div id="skills" className="skills">
        <h1>MY SKILLS</h1>
  <div className="items">
    <div className="item" 
              data-aos="flip-left"
              data-aos-duration="1000">
        <img src={htmlImage} alt="" />
        <h3>HTML</h3>
    </div>
    <div className="item" 
              data-aos="flip-left"
              data-aos-duration="1000"> 
    <img src={cssImage} alt="" />
        <h3>CSS</h3>
    </div>
    <div className="item" 
              data-aos="flip-left"
              data-aos-duration="1000">
        <img src={jImage} className='jsImage' alt="" />
        <h3>JavaScripte</h3>
    </div>
    <div className="item" 
              data-aos="flip-left"
              data-aos-duration="1000">
        <img src={reactImage} alt="" />
        <h3>React JS</h3>
    </div>
  </div>
        </div>
  )
}

export default Skills
