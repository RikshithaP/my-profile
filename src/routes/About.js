import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Work from '../Components/Work/Work'
import Detail from '../Components/Details/Details'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Work heading="ABOUT" text="I'm friendly Front-end Developer."/>
      <Detail/>
      <Footer/>
    </div>
  )
}

export default About