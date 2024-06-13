import './Details.css'

import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/fullstack.jpg'
import img2 from '../../assets/ml.jpg'

const Detail = () => {
  return (
    <div className='about'>
      <div className='left'>
          <h1>Who Am I?</h1>
          <p>Full-stack developer skilled in both frontend/backend and  with machine learning ascepts.</p>
          <Link to="/contact">
            <button className='btn'>Contact</button>
          </Link>
      </div>
      <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
               <img src={img1} className='img' alt='true'/>
            </div>
            <div className='img-stack bottom'>
               <img src={img2} className='img' alt='true'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Detail