import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a backend-focused developer with 1.5+ years of experience, and solid skills in React.</p>
                <Link to='/contact'>
                    <button className="btn">Contact</button>
                </Link>



        </div>
        <div className="right"></div>
      
    </div>
  )
}

export default AboutContent
