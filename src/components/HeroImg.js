import React from 'react'
import './HeroImgStyles.css'
import IntroImage from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
      <img className='intro-img' src={IntroImage} alt="front picture" />
      </div>
    <div className="content">
        <p>Hi, I'm Binay Rai.</p>
        <h1>Django and React developer</h1>
        <div className="button">
            <Link to='/project' className='btn'> Project</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>



    </div>
    </div>
  )
}

export default HeroImg
