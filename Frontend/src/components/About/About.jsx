import React from 'react'
import './About.css'
import { Typography } from '@mui/material';
import myImg from '../../Images/Myphoto.jpeg';

const About = () => {
  return (
    <div className='about'>
      <div className="aboutContainer">
        <Typography>This is a sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img src={myImg} alt="" className='aboutAvatar' />
            <Typography variant='h4' style={{margin: "1vmax 0", color: "black"}}>Aakrisht</Typography>
            <Typography>Full Stack Developer</Typography>
            <Typography style={{margin: "1vmax 0"}}>I am a Student</Typography>
        </div>
        <div>
            <Typography style={{
                wordSpacing: "5px",
                lineHeight: "50px",
                letterSpacing: "5px",
                textAlign: "right",
            }}>This is description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae quis tempore aspernatur eveniet ab, temporibus dolorum, quos dolorem quod, consectetur accusantium.</Typography>
        </div>
      </div>
    </div>
  )
}

export default About
