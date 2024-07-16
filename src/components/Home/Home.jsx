import React from 'react'
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import Rotation from "./Rotation";
import { Typography } from '@mui/material';
import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiTailwindcss
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { Link } from 'react-router-dom'
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { useState, useEffect } from 'react';

const Home = () => {

  const [hideIconRotate, setHideIconRotate] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setHideIconRotate(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{backgroundColor:"rgb(7, 3, 11)"}}>
        <div className="iconRotate">
          <img className="imga" style={{position:"absolute", zIndex:"1", width:"100vw", height:"100vh"}} src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721146560/Portfolio/marcin-jozwiak-Jmsw8wYy7Ig-unsplash_txzha7.jpg" alt="" />
          <div style={{position:"absolute", zIndex:"2", width:"100vw", height:"100vh", backgroundColor:"rgba(0, 0, 0, 0.3)"}}></div>
            <Canvas style={{position:"absolute", zIndex:"10", display: hideIconRotate ? 'none' : 'block'}} shadows camera={{ position: [0, 2, 4], fov: 30 }}>
                
                <Experience />
            </Canvas>
            <div className='Rot'>
                <Rotation />
            </div>
        </div>
        <div className='bodyCont'>
            <div className="homeContainer">
                <div style={{display:"flex", justifyContent:"center", paddingTop:"40px"}}>
                  <img className='md:h-[65px] h-[50px] md:w-[450px] w-[300px]' src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147750/Portfolio/timelineText_iypghs.png" alt="" />
                </div>
                <div className="colors"></div>
                <div className='timelineContainer'>
                <div className="timeline">
                  <div className="checkpoint">
                    <div>
                      <h2>AlgoZenith</h2>
                      <p>
                        Managed and maintained student course feedback and update system. Implemented data collection strategies to gather and analyze student feedback and course progress metrics. Visualize student engagement and course effectiveness.
                      </p>
                    </div>
                  </div>
                  <div className="checkpoint">
                    <div>
                      <h2>Oasis Infobyte</h2>
                      <p>
                        <b>Landing Page:</b> &nbsp;Developed a responsive landing page using HTML, CSS, and JavaScript. Implemented modern design principles to enhance user engagement and visual appeal. Integrated animations and transitions to create a seamless user experience.
                      </p>
                      <br />
                      <p>
                        <b>Portfolio Website:</b> &nbsp;Designed and developed a personal portfolio website showcasing skills and projects. Incorporated interactive elements and navigation for easy exploration of content.
                      </p>
                      <br />
                      <p>
                        <b>Temperature Converting Website:</b> &nbsp;Created a web application to convert temperatures between Celsius, Fahrenheit, and Kelvin. Utilized JavaScript for client-side calculations and user input validation. Designed a simple yet effective UI for intuitive temperature conversion.
                      </p>
                    </div>
                  </div>
                  <div className="checkpoint">
                    <div>
                      <h2>College Canteen Website</h2>
                      <p>
                        Created a college canteen website frontend using HTML and CSS in a 2-hour competition. Awarded 1st prize for design and functionality, demonstrating effective UI/UX despite non-responsive design.
                      </p>
                    </div>
                  </div>
                  <div className="checkpoint">
                    <div>
                      <h2>Pinterest Clone</h2>
                      <p>
                        Developed a Sull Stack Clone. User can perform CRUD Operations. Implemented features such as user authentication, image uploading, and pinning functionality. Designed a intuitive user interface to replicate Pinterest aesthetic and functionality
                      </p>
                    </div>
                  </div>
                  <div className="checkpoint">
                    <div>
                      <h2>Blog Website</h2>
                      <p>
                        Building a MERN stack blog website integrated with Gemini AI for automated content generation. Implementing user session management to save user sessions and preferences. Enabling users to create and publish blogs with AI-assisted content, ensuring a personalized and secure experience. Designing a responsive UI for optimal usability across devices.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="homeSkills" style={{width:"100%"}}>
              <img className='md:h-[65px] h-50px w-[300px]' src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147750/Portfolio/skillsText_ynixxo.png" alt="" />
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147774/Portfolio/Mongo_gdclab.png" alt="MongoDB" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147773/Portfolio/Express_aornag.png" alt="ExpressJS" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147775/Portfolio/React_ads9ew.png" alt="ReactJS" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147774/Portfolio/Node_o9uutx.png" alt="NodeJS" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147773/Portfolio/Javascript_o9me9c.png" alt="Javascript" />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147776/Portfolio/Tailwind_nfqqk0.png" alt="Tailwind CSS" />
                    </div>
                </div>
                <div className="cubeShadow"></div>
                <div className="homeSkillsBox">
                    <SiCplusplus />
                    <SiReact />
                    <SiJavascript />
                    <SiMongodb />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiCss3 />
                    <SiHtml5 />
                    <SiTailwindcss />
                </div>
            </div>
            <div className="homeYoutube">
               <div className="color"></div>
                <div style={{width:"100%", display:"flex", justifyContent:"center", margin:"10px 0"}}>
                  <img className='md:w-[600px] md:h-[65px] w-[350px] h-[50px]' src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147751/Portfolio/ytText_cr16b3.png" alt="" />
                </div>
                <div className="homeYoutubeWrapper">
                    <YoutubeCard image="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721146560/Portfolio/YT1_nr2fcv.png" title='Glass Navbar' url="https://www.youtube.com/watch?v=lXt1Qp9yozA&t=453s"/>
                </div>
            </div>
    <div className='footer' style={{borderTopLeftRadius: "50px", borderTopRightRadius: "50px"}}>
      <div className='footerAbout md:ml-[30px] md:w-[60%] w-[60%]'>
        <Typography className='md:w-[120px] w-[60px]' variant="h5"><b>About Me</b></Typography>
        <Typography style={{color:"white"}}>
          Hey, my name is Aakrisht Malik. I am a Full-Stack Developer and I have a Youtube channel called <b> Aakrisht Malik</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn w-[150px] h-[50px]" >
          <Typography className='footerContactBtnText'>Contact Us</Typography>
        </Link>
      </div>
      <div className='footerSocial md:ml-[300px]'>
        <Typography variant='h5' className='social md:w-[150px] w-[80px]'><b>Social Media</b></Typography>
        <a href="https://github.com/Aakrisht1" target='blank'>
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@AakrishtMalik" target='blank'>
          <BsYoutube />
        </a>
        <a href="https://instagram.com/aakrishtmalik" target='blank'>
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/aakrishtmalik/" target='blank'>
          <BsLinkedin />
        </a>
      </div>
    </div>
  
        </div>
    </div>
  )
}

export default Home
