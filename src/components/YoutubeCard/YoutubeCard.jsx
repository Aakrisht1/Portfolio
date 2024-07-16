import React from 'react'
import './YoutubeCard.css'
import { Typography } from '@mui/material';

const YoutubeCard = ({
    url = "",
    title = "",
    image,
}) => {
  return (
    <div className='youtubeCard'>
      <a href={url} target='blank'>
        <img src={image} alt="Video" />
        <Typography className="pt-2">{title}</Typography>
      </a>
    </div>
  )
}

export default YoutubeCard
