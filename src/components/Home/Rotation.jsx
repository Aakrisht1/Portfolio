import React from 'react'
import TextSpan from './TextSpan'
import './Rotation.css'

const sentence1 = "Hi,".split("");
const sentence2 = "I'm akrisht,".split("");
const sentence3 = "Web Developer".split("");

const Rotation = () => {
  return (
    <div>
      <div className='main1'>
        <div className='circle11'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147774/Portfolio/Mongo_gdclab.png" alt="MongoDB" className='img11'/>
        </div>
        <div className='circle12'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147773/Portfolio/Express_aornag.png" alt="ExpressJS" className='img12'/>
        </div>
      </div>
      <div className='main2'>
        <div className='circle21'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147775/Portfolio/React_ads9ew.png" alt="ReactJS" className='img21'/>
        </div>
        <div className='circle22'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147774/Portfolio/Node_o9uutx.png" alt="NodeJS" className='img22'/>
        </div>
      </div>
      <div className='main3'>
        <div className='circle31'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147773/Portfolio/Javascript_o9me9c.png" alt="Javascript" className='img31'/>
        </div>
        <div className='circle32'>
          <img src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147776/Portfolio/Tailwind_nfqqk0.png" alt="Tailwind CSS" className='img32'/>
        </div>
      </div>
      <div className='textApp w-full'>
        <div className='innerTextApp1'>
          {sentence1.map((letter, index) => {
            return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>)
          })}
        </div>
        <div className='innerTextApp2'>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === "a" ? <span style={{color:"red", textShadow:"-3px 2px hsl(48.05, 88.98%, 50.2%)"}}>A</span> : null}
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>)
          })}
        </div>
        <div className='innerTextApp2'>
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>)
          })}
        </div>
      </div>
    </div>
  );
}

export default Rotation;
