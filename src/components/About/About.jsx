import React from 'react'
import './About.css'
import { Typography } from '@mui/material';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
    <div className='about'>
    <div className="color3"></div>
      <div className="aboutContainer mt-[100px]">
        <Typography className="text-xs">As I embark on the next phase of my career, I'm eager to contribute my skills to innovative projects and collaborate with like-minded professionals who share my passion for cutting-edge technology and elegant coding solutions. <br /> Feel free to explore my portfolio and reach out—I'm always open to new opportunities and connections!</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721146558/Portfolio/Myphoto_phsu5r.jpg" alt="" className='aboutAvatar' />
            <Typography variant='h4' style={{margin: "1vmax 0", color: "black"}}>Aakrisht Malik</Typography>
            <Typography>Full Stack Developer</Typography>
            <Typography style={{margin: "1vmax 0"}}>I am a Student</Typography>
        </div>
        <div>
            <Typography style={{
                wordSpacing: "5px",
                lineHeight: "50px",
                letterSpacing: "5px",
                textAlign: "right",
            }}>I am a passionate MERN stack developer currently in my final year of BTech at Shri Ramswaroop Memorial College of Engineering and Management. I specialize in crafting robust web applications using MongoDB, Express.js, React.js, and Node.js, collectively known as the MERN stack.</Typography>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
