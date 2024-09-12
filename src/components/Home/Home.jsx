import React, { useEffect, useRef } from 'react'
import './Home.css'
import hero_1 from '../../Images/hero_1.jpg'
import Typed from 'typed.js'

const Home = () => {
  
  const typedRef = useRef(null)

  useEffect(()=> {

  const option = {
    strings:["BCA Student","Frontend Developer","Wordpress Web Design", " Data Entery Oprator"],
    typedSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  }

  const typed = new Typed(typedRef.current, option)

  return () => {
    typed.destroy()
  }
  },[])

  return (
    <div className="hero-secton" id='home-hero'>
      <div className="hero-items">
      <div className="left-hero">
        <h3>Hello, It's Me</h3>
        <h1>Manibhusan Prasad Sah</h1>
     <h3 className='typed-text'>And I'm a <span ref={typedRef}></span> </h3>
      <p>I'm a web Designer with extensive experience for over 2 years. <br />expertiese is to create and website design, Frontend design, and many more....</p>
      <span id="element"></span>
      <div className="hero-heading">
      <div className="hero-social">
      <a href="https://www.facebook.com/profile.php?id=100062733591553" target='_blank'><i class='bx bxl-facebook' ></i></a>
      <a href="https://www.instagram.com/er_manibca/" target='_blank'><i class='bx bxl-instagram' ></i></a>
      <a href="https://www.linkedin.com/in/manibhusan-prasad-sah-02a93723b/" target='_blank'>
              <i class="bx bxl-linkedin"></i>
            </a>
      <a href="https://wa.me/916280807422?text=Hello How Can I help you?" target='_blank'><i class='bx bxl-whatsapp' ></i></a>
      <a href="https://www.tiktok.com/@m.k.s_official" target='_blank'><i class='bx bxl-tiktok'></i></a>
      </div>
      <a href="#about" className="btn-box btn hero-btn">More About Me</a>
      </div>
      </div>
      <div className="right-hero">
        <div className="imge">
        <img src={hero_1} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
