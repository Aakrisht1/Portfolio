import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from './animation'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    })

  return (
    <>
        <div className="preloader">
            <div className="texts-container">
                <span>Developer,</span>
                <span>Creater,</span>
                <span>Vibe.</span>
            </div>
        </div>
    </>
  )
}

export default Preloader
