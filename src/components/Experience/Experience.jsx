import React from "react";
import "./Experience.css";
import rabab from "../../Images/rabab.png";
import prabha from "../../Images/prabha.png";
import thinNext from "..//../Images/thinkNext.png";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1>MY EXPERIENCE</h1>
      <div className="experience-card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="experience-item">
          <div className="experience-items" data-aos="flip-left" data-aos-duration="1000">
           <div className="card-prabha">
           <div className="left">
              <img src={prabha} alt="" className="exp-img" />
            </div>
            <div className="right">
              <h2> Wordpress Web Development</h2>
              <h4 className="prabha-info">
                <span style={{ color: "#26ff00" }}>
                  {"Jun, 2021"} {"Jan, 2023"}{" "}
                </span>{" "}
                <span style={{ color: "yellow" }}>
                  PRABHA Study & Educational Research Centre Pvt.Ltd
                </span>
              </h4>
              <h5 style={{ color: "yellow" }}>
                Behind Army Camp-Prabhu Hospital Road- ,Panitanki-10, Birgunj,
                Nepal
              </h5>
              <h5 style={{ color: "yellow" }}>Worked on Microsoft Office</h5>
            </div>
           </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-items" data-aos="flip-left" data-aos-duration="1000">
           <div className="card-prabha">
           <div className="left">
              <img src={rabab} alt="" className="ex-imgs"/>
            </div>
            <div className="right">
              <h2> Wordpress Web Development</h2>
              <h4 className="rabab-info">
                <span style={{ color: "#26ff00" }}>
                  {"May, 2023"} {"July, 2023"}{" "}
                </span>{" "}
                <span style={{ color: "yellow" }}>
                  {" "}
                  Worked with the Rabab It Solutions Bard Team
                </span>
              </h4>
              <h5 style={{ color: "yellow" }}>
                {" "}
                Shaheed Bhagat Singh Nagar, Morinda, Punjab (India)
              </h5>
              <h5 style={{ color: "yellow" }}>
                Worked on Wordpress Website Desinging
              </h5>
            </div>
           </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-items" data-aos="flip-left" data-aos-duration="1000">
           <div className="card-prabha">
           <div className="left">
              <img src={thinNext} alt="" className="ex-imgs" />
            </div>
            <div className="right">
              <h2>Android App Development</h2>
              <h4>
                <span style={{ color: "#26ff00" }}>
                  {"Sept, 2022"} {"Oct, 2022"}{" "}
                </span>{" "}
                <span style={{ color: "yellow" }}>
                  ThinkNEXT Technologies Pvt. Ltd
                </span>
              </h4>
              <h5 style={{ color: "yellow" }}>
                ThinkNEXT Technologies Pvt. Ltd Mohali (Chandigarh)
              </h5>
              <h5 style={{ color: "yellow" }}>
                Worked on the Java App development
              </h5>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
