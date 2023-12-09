import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"white",marginRight:"2rem"}}  />
           <div>
           <p>Basundhara 3, Kathmandu</p>
           <p>Nepal</p>
           </div>
            </div>
      
        <div className="phone">
        <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}  />
        9818207179 , 9768400312
           </h4>
       
        <div className="email">
        <p> <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}  />
        raibinay421@gmail.com
           </p>
           
        </div></div>  </div>
        <div className="right">
            <h4>About me</h4>
            <p>I am currently seeking internship in django and react Js.I can create full stack website using django as backend,react Js as frontend and MySQL as database language.I am self learner and want to have professional experience in web developement. </p>
        <div className="social">
        <FaFacebook size={20} style={{color:"white",marginRight:"1rem"}}  />
        <FaTwitter size={20} style={{color:"white",marginRight:"1rem"}}  />
        <FaLinkedin size={20} style={{color:"white",marginRight:"1rem"}}  />
        
        </div>
        </div>



      </div>
    </div>
  )
}

export default Footer
