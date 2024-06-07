import React from 'react'
import './Rotation.css'

const Rotation = () => {
  return (
    <div>
      <div className='main1'>
        <div className='circle11'>
          <img src="/Icons/Mongo.png" alt="" className='img11'/>
        </div>
        <div className='circle12'>
          <img src="/Icons/Express.png" alt="" className='img12'/>
        </div>
      </div>
      <div className='main2'>
        <div className='circle21'>
          <img src="/Icons/React.png" alt="" className='img21'/>
        </div>
        <div className='circle22'>
          <img src="/Icons/Node.png" alt="" className='img22'/>
        </div>
      </div>
      <div className='main3'>
        <div className='circle31'>
          <img src="/Icons/Javascript.png" alt="" className='img31'/>
        </div>
        <div className='circle32'>
          <img src="/Icons/Tailwind.png" alt="" className='img32'/>
        </div>
      </div>
    </div>
  );
}

export default Rotation;
