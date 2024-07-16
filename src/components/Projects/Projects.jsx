import React from 'react'
import './Projects.css'
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai'
import { Delete } from '@mui/icons-material';
import Footer from '../Footer/Footer';

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return(
    <>
      <a href={url} className='projectCard' target='blank'>
        <div>
          <img src={projectImage} className="projectImg" alt="Project" />
          <Typography variant='h5'>{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant='h4'>About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant='h6'>Tech Stack: {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{color: "rgba(40,40,40,0.7)"}}>
          <Delete />
        </Button>
      )}
    </>
  )
}

const Projects = () => {
  return (
    <div style={{backgroundColor:"#000"}}>
    <div className='projects'>
      <div>
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
      <ProjectCard 
            url = "https://pinterest-1hec.onrender.com/"
            projectImage = "https://res.cloudinary.com/dgte5mqt7/image/upload/v1721149381/Portfolio/Screenshot_25_xiy3xn.png"
            projectTitle = "Pinterest Clone"
            description = "Here is my Pinterest Clone project. It is a full-stack project where I have used EJS for the frontend and Node.js, Express.js, and MongoDB for the backend. I have used Tailwind CSS for styling and Material UI for icons, Multer for uploading, Cloudinary for Image Storage and Passport JS for Authentication."
            technologies = "Node, Express, MongoDB, Tailwind CSS, Material UI, Multer, Cloudinary"
          />
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Projects
