import './Hero.css';

import React from 'react';
import Bg from '../../assets/bg.jpg'
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='bg' src={Bg} alt='BackgroundImg'/>
      </div>
      <div className='content'>
       <p>Hello, I'm Rikshitha</p>
       <h1>Full-Stack Developer</h1>
       <div>
        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/contact" className='btn btn-light'>Contact</Link>
       </div>
      </div>
    </div>
  )
}

export default Hero