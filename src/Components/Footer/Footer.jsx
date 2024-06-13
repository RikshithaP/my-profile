import './Footer.css'

import React from 'react'
import {FaHome,FaPhone,FaMailBulk,  FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
            <div className='location'>
                    <FaHome size={20} style={{color:"white",marginRight:"2rem"}} />
                    <div>
                        <p>Ponneri,Tiruvallur</p>
                        <p>TamilNadu.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}} />9384085915</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}} />rikshithaprem@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <p>Thanks for stopping by!Let’s connect.</p>
                <div className='social'>
                <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}} />
                <FaGithub size={30} style={{color:"white",marginRight:"1rem"}} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer