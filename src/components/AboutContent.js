import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who am I?</h1>
            <p>I'm Full Stack Web developer.I am currently seeking
                 internship in django and react.js . </p>
                <Link to='/contact'>
                    <button className="btn">Contact</button>
                </Link>



        </div>
        <div className="right"></div>
      
    </div>
  )
}

export default AboutContent
