import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { color } from 'three/examples/jsm/nodes/shadernode/ShaderNode.js'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Typography variant='h5'>Social Media</Typography>
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
      <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
      </Link>
    </div>
  )
}

export default Footer
