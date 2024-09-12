import React from 'react'
import './Projects.css'
import project from '../data/project.json'

const Projects = () => {
  return (
    <div id="projects" className="projects">
        <h1>MY PROJECTS</h1>
       <div className="project-items" data-aos="flip-left" data-aos-duration="1000">
        {project.map((data) => {
          return (
       <div className="card-item" >
            <div className="card-items" >
              <div className="img">
                <img src={data.imageSrc} alt="" className='card-img' />
             </div>
              <div className="card-info">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-desc">{data.description}</p>
                <div className="card-btn">
                <a href={data.demo} className="btns">Demo</a>
                <a href={data.source} className="btns">Source</a>
                </div>
                </div>
                </div>
                </div>
          )
        })}
        </div>
      </div>
  )
}

export default Projects
