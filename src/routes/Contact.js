import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Work from '../Components/Work/Work'
import Connects from '../Components/Connect/Connect'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Work heading="CONTACT" text="Let's have a chat."/>
      <Connects/>
      <Footer/>
    </div>
  )
}

export default Contact