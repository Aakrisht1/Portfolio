import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='md:ml-[30px] md:w-[60%] w-[60%]'>
        <Typography variant="h5" className='md:w-[105px] w-[60px]'>About Me</Typography>
        <Typography style={{color:"white"}}>
        Hey, my name is Aakrisht Malik. I am a Full-Stack Developer and I have a Youtube channel called <b> Aakrisht Malik</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn w-[150px] h-[50px]" >
          <Typography className='footerContactBtnText'>Contact Us</Typography>
        </Link>
      </div>
      <div className='md:ml-[300px]'>
        <Typography variant='h5' className='social md:w-[140px]'>Social Media</Typography>
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
  )
}

export default Footer
