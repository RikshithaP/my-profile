import './Work.css'

import React, { Component } from 'react'

class Work extends Component {
    render(){
        return (
            <div className='work'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
  
}

export default Work