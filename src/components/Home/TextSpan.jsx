import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'
import { useState } from 'react';

const TextSpan = ({children}) => {
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);
    const rubberBand = () =>{
        controls.start({
            transform:[
              "scale3d(1,1,1)",
              "scale3d(1.4,0.55,1)",
              "scale3d(0.75,1.25,1)",
              "scale3d(1.25,0.85,1)",
              "scale3d(0.9,1.05,1)",
              "scale3d(1,1,1)"
            ],
            transition:{
              duration:0.5,
              times:[0,0.4,0.6,0.7,0.8,0.9],
              repeat:1
            }
        })
        setIsPlaying(true)
    }
  return (
    <motion.span animate={controls} onMouseOver={()=>{
        if(!isPlaying){
            rubberBand()
        }
    }}
    onAnimationComplete={()=>setIsPlaying(false)}>
      {children}
    </motion.span>
  )
}

export default TextSpan
