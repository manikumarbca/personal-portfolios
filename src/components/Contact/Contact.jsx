import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Number: '',
    Email: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('Name', formData.Name);
    data.append('Number', formData.Number);
    data.append('Email', formData.Email);
    data.append('Message', formData.Message);


   // your URL.

   const Sheet_Url="https://script.google.com/macros/s/AKfycbxKOafiG4wUFGpiG6uO7wJeDRJuFfSix_CXq1OByia0OWHeU-DiC2wc3U-KSbSEWY1i/exec"

   try {
      await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        Name: '',
        Number: '',
        Email: '',
        Message:'',
      });
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containers" id="contact">
      <h1 className="contact-us">Contact Us</h1>
      <div className="row" data-aos="zoom-out-up"
                data-aos-duration="1000">
        <div className="contact-left" data-aos="fade-left" data-aos-duration="100">
          <h1 className="sub-titel">Contact Me</h1>
          <p><i class="bx bx-envelope"></i>sahmanibhusanprasad@gmail.com</p>
         <p><i class="bx bx-phone"></i> <span>+916280807422 <br /> +9779809187308</span></p>
          <div className="social-icon">
          <a href="https://www.facebook.com/profile.php?id=100062733591553" target='_blank'><i class='bx bxl-facebook' ></i></a>
      <a href="https://www.instagram.com/er_manibca/" target='_blank'><i class='bx bxl-instagram' ></i></a>
      <a href="https://www.linkedin.com/in/manibhusan-prasad-sah-02a93723b/" target='_blank'>
              <i class="bx bxl-linkedin"></i>
            </a>
      <a href="https://wa.me/916280807422?text=Hello How Can I help you?" target='_blank'><i class='bx bxl-whatsapp' ></i></a>
      <a href="https://www.tiktok.com/@m.k.s_official" target='_blank'><i class='bx bxl-tiktok'></i></a>
          </div>
          <a
            href="images/Manibhusan Prasad Sah CV Resume.pdf"
            download
            class="btn btn2"
          >
            Download CV
          </a>
        </div>
        <div className="contact-right" data-aos="fade-right" data-aos-duration="100">
          <form onSubmit={handleSubmit}>
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Your Name" required />
            <input type="number" name="Number" value={formData.Number} onChange={handleChange} placeholder="Your Number" required/>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Your Email" required />
            <textarea name="Message" value={formData.Message} onChange={handleChange} rows="6" placeholder="Your Message" />
            <button type="submit" className="btn btn2">Submit</button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <hr />
        <p>
          © 2024 Company. All rights reserved. Designed by{" "}
          <i class='bx bxs-heart'></i> Manibhusan Prasad Sah
        </p>
      </div>
    </div>
  );
}

export default Contact;
