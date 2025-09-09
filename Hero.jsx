
import React from 'react'
import photo from './image/photo.jpg'

const Hero = () => {
  return (
    <>
       <div className='container2'>
            <img src={photo} alt="image" className='img1'/>
       </div>

       <div className='name'>
           <h1 className='name1'>PUNAMALLI SRINIVASULU</h1>
       </div>

        <div className='name'>
           <h3 className='name2'>Full Stack Web Developer</h3>
       </div>

        <div className='name'>
          <p className='para'>As a fresher recent graduate to start my career in IT industry. i am very excited to work with dynamic team committed
to learning , growing in IT industry.to gain experience and developing skills while doing projects.</p>
       </div>

       <div className='bot'>
          <button type='submit' className='btn'>Get in Touch</button>
       </div>
    </>
  )
}

export default Hero
