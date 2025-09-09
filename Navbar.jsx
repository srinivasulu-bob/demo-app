
import React from 'react'

const Navbar = () => {

  return (
    <>
         <div className='container'>
             <div>
                <p className='p'>Fission Infotech</p>
             </div>
             <div className='links'>
                <a href="#home" className='link1'>Home</a>
                <a href="#service" className='link1'>Service</a>
                <a href="about" className='link1'>About</a>
                <a href="projects" className='link1'>Projects</a>
                <a href="contact" className='link1'>Contact</a>
             </div>
        </div> 
    </>
  )
}

export default Navbar