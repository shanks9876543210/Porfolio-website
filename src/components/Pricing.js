import { Link } from 'react-router-dom'
import './PricingStyles.css'
import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing'> 
    <div className="card-container">
        <div className="card">
            <h3>-Basic-</h3>
            <span className="bar"></span>
            <p className='btc'> $100 </p>
            <p>-3 days-</p>
            <p>-3 page-</p>
            <p>-featured-</p>
            <p>-Responsive design-</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>-Premium-</h3>
            <span className="bar"></span>
            <p className='btc'> $200 </p>
            <p>-2 days-</p>
            <p>-5 page-</p>
            <p>-featured-</p>
            <p>-Responsive design-</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>-Business-</h3>
            <span className="bar"></span>
            <p className='btc'> $300 </p>
            <p>-2 days-</p>
            <p>-8 page-</p>
            <p>-featured-</p>
            <p>-Responsive design-</p>
            <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
    </div>
      
    </div>
  )
}

export default Pricing
