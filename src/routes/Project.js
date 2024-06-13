import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Work from '../Components/Work/Work'
import WorkCards from '../Components/WorkCard/WorkCards'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Work heading="PROJECTS" text="Some of my most recent works."/>
      <WorkCards/>
      <Footer/>
    </div>
  )
}

export default Project