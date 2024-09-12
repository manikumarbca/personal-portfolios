import React from 'react'
import './About.css'
import hero_2 from '../../Images/hero_2.jpg'

const About = () => {
  return (
    
    

<div id="about">
    <div className="containers">
    <h1 className="sub-title">About Me</h1>
        <div className="rows" data-aos="fade-up" data-aos-duration="11">
            <div className="about-col-1"
            data-aos="zoom-out-right" data-aos-duration="1"
            >
                <img src={hero_2} alt="" />
                </div>
                <div className="about-col-2" data-aos="zoom-out-left" data-aos-duration="1">
                    <div className="heading"><h1>About</h1></div>
                    <p> Hardworking Web Designer successful at developing and updating forward-thinking Website
                        interfaces to promote user engagement. Well-versed in custom designs, wireframe layouts and
                        advanced web design principles. Highly experienced in PHP, CSS and JavaScript. Successful
                        developing mobile, desktop and phone applications that meet or exceed quality, usability and
                        speed requirements.
                        Web Designer committed to developing elegant user interfaces that raise bar for utility and
                        design. Skilled in Java,C,C++ programming and use of Adobe Creative Suite. Astute project
                        manager with over 2 years of experience in web development.</p>

                    <div className="tab-title">
                        <div className="tab-links"><h1>Education</h1></div>
                       
                        <div className="tab-contents" id="education">
                    <div className="towelve-about">
            <h3>Bachelor's</h3>
            <p>Guru Kashi University Talwandi sabo, bathinda punjab, India</p>  <p>GPA:-74</p>
           
            </div>
                   
                    <div className="towelve-about">
            <h3>+2</h3>
            <p>Shree Nepal Rastriya higher Secondary Technical School, Piparpati, Pachrauta-1, Bara ,Nepal</p>
            <p>GPA:-69</p>
         </div>
         <div className="ten-about">
            <h3>10</h3>
            <p>Shree Nepal Rastriya higher Secondary Technical School, Piparpati, Pachrauta-1, Bara ,Nepal</p>
            <p>GPA:-67</p>
         </div>
      </div>
      </div>
         </div>
         </div>
  </div>
   </div>

  )
}

export default About
