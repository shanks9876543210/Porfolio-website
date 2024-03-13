import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBarStyles.css'
import {FaBars,FaTimes} from "react-icons/fa"

const NavBar = () => {
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false)
  const changeColor=()=>{
    if(window.scrollY >= 1){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor)
const handleClick=()=>
  setClick(!click)

  return (
    <div className={color?'header header-bg':'header'}>
      <Link to="/">
        <h3 id="nameSize">BINAY</h3>
      </Link>
      <ul className={click?"nav-menu active" : "nav-menu"}> 
        <li class="navbarSize">
            <Link to='/'>Home</Link>
        </li>
        <li className='navbarSize'>
            <Link to='/project'>Project</Link>
        </li>
        <li className='navbarSize'>
            <Link to='/contact'>Contact</Link>
        </li>
        <li className='navbarSize'>
            <Link to='/about'>About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?( <FaTimes size={20} style={{ color: "white"}} {...click?"nav-menu":"nav-menu active"} />
        ):(<FaBars size={20} style={{ color: "white"}} />)
        
        }
        
       
      </div>
    </div>
  )
}

export default NavBar
