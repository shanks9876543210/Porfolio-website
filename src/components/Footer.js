import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
        <div className="location" style={{ display: 'flex', alignItems: 'center',color: "white" }}>
          <h4><FaHome size={20} style={{ color: "white", marginRight: "2rem" }} /> Basundhara 3, Kathmandu  Nepal</h4>
        
  
    </div>
      
        <div className="phone">
        <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}  />
        9818207179 , 9768400312
           </h4>
       
        <div className="email">
        <h4> <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}  />
        raibinay421@gmail.com
           </h4>
           
        </div></div>  </div>
        <div className="right">
            <h4>About me</h4>
            <p>I am currently seeking internship in django and react Js.I can create full stack website using django as backend,react Js as frontend and MySQL as database language.I am self learner and want to have professional experience in web developement. </p>
        <div className="social">
        
        
        <a href='https://www.linkedin.com/in/binay-rai-3219b3181/' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginRight: '1rem' }}><FaLinkedin size={20}  /></a>
        <a href='https://github.com/shanks9876543210' target='_blank' rel='noopener noreferrer' style={{ color: 'white', marginRight: '1rem' }}>
          <FaGithub size={20} />
        </a>
        
        </div>
        </div>



      </div>
    </div>
  )
}

export default Footer
