import React from 'react';
import { Link } from 'react-router-dom';
import "./Successful.css";

const Successful = () => {
  return (
    <div className='cardBody'>
        <div className="card">
            <div style={{borderRadius:"200px", height:"200px", width:"200px", background:"#F8FAF5", margin:"0px auto"}}>
                <i className="checkmark">✓</i>
            </div>
            <h1>Success</h1> 
            <p>We received your message request;<br/> we'll be in touch shortly!</p>
            <Link to="/contact">Back</Link>
        </div>
    </div>
  )
}

export default Successful
