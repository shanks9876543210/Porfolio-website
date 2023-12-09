import './WorkCardStyles.css'
import React from 'react'
import pro1 from '../assets/project1.png'
import pro2 from '../assets/project2.png'
import pro3 from '../assets/project3.png'
import pro4 from '../assets/project4.png'
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className="project-heading">Project</h1>
      <div className="project-container">


        <div className="project-card">
            <img src={pro1} alt="project Image" />
            <h2 className="project-title">project title</h2>
            <div className="project-details">
                <p>this is text</p>
                <div className="pro-btns">
                    <NavLink className="btn">View</NavLink>
                    <NavLink className="btn">Source</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
