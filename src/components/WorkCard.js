import './WorkCardStyles.css'
import React from 'react'
import pro1 from '../assets/p1.png'
import pro2 from '../assets/p2.jpeg'
import pro3 from '../assets/p3.jpeg'
import pro4 from '../assets/project4.png'
import { NavLink } from 'react-router-dom'
import UnderConstructionPage from './UnderConstructionPage'
const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className="project-heading">Project</h1>
      <div className="project-container">


        <div className="project-card">
            <img src={pro1} alt="project Image" />
            <h2 className="project-title">Dropit: 10 Min Grocery Delivery</h2>
            <div className="project-details">
            <p>Built secure and scalable RESTful APIs using Django. Created the company landing page and a comprehensive staff portal using Django templates for managing product,orders,rider, sales data, reports, and admin controls. Implemented AJAX for asynchronous operations and Django Channels with Redis for real-time updates and notifications. Integrated third-party APIs, including SMS API for OTP verification and Galli Map API for rider navigation.</p>

                <div className="pro-btns">
                  
                    <NavLink className="btn"  to='https://www.dropit.com.np/'>View</NavLink>
                    <NavLink target='_blank' className="btn" to='https://www.dropit.com.np/'>Source</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro2} alt="project Image" />
            <h2 className="project-title">Blogpost-Blogposting Website Website</h2>
            <div className="project-details">
                <p>Developed using Django. Implemented user authentication, blog listing having different categories,and login/logout functionality.Implemented interactive features including Like and Comment buttons for user engagement.</p>
                <div className="pro-btns">
                  
                    <NavLink className="btn"  to='/underConstruction'>View</NavLink>
                    <NavLink target='_blank' className="btn" to='https://github.com/shanks9876543210/Blogpost'>Source</NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro3} alt="project Image" />
            <h2 className="project-title">Note app</h2>
            <div className="project-details">
                <p>Developed using Django and React.js Implemented CRUD operations, real-time updates, and user authentication. Developed RESTful APIs for communication between frontend and backend.</p>
                <div className="pro-btns">
                  
                    <NavLink className="btn"  to='/underConstruction'>View</NavLink>
                    <NavLink target='_blank' className="btn" to='https://github.com/shanks9876543210/Note-app'>Source</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
