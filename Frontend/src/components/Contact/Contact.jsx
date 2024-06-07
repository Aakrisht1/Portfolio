import React from 'react'
import './Contact.css'
import { Typography, Button } from '@mui/material'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const contactFormHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='contact'>

        <div className='contactRightBar'></div>

        <div className="contactContainer">
            <form action="" className="contactContainerForm" onSubmit={contactFormHandler}>
                <Typography variant='h4'>Contact Us</Typography>
                <input type="text" name="" placeholder='Name' required id="" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="" placeholder='Email' required id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea name="" placeholder='Message' required id="" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <Button variant='contained' type='submit'>Send</Button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
