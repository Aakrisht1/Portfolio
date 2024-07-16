import React from 'react'
import './Contact.css'
import { Typography, Button } from '@mui/material'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const contactFormHandler = (e) => {
        e.preventDefault();
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9bc9c987-ffe4-47e4-a787-7576c4a51c0b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          navigate('/Successful');
        }
      };

  return (
    <div style={{backgroundColor:"#000"}}>
    <div className='contact'>

        <div className='contactRightBar'></div>

        <div className="contactContainer">
            <form action="" className="contactContainerForm md:gap-[1.5vmax] gap-[2.2vmax]" onSubmit={onSubmit}>
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <img className='md:h-[60px] md:w-[350px]' src="https://res.cloudinary.com/dgte5mqt7/image/upload/v1721147750/Portfolio/contactText_vsfg0e.png" alt="" />
                </div>
                <input className='i1' type="text" name="name" placeholder='Name' required id="" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className='i2' type="email" name="email" placeholder='Email' required id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className='i3' name="message" placeholder='Message' required id="" cols="30" rows="8" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <Button variant='contained' type='submit'>Send</Button>
            </form>
        </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Contact
