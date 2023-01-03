import React,{useState} from 'react'
import  './Header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isMobile,setIsMobile] = useState(false);


  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="logo" />
        <span>WINTER</span>
      </a>
      

    <div className="right">
    <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={()=> setIsMobile(false)}>
           <Link to="/Hero" className="hero">
            <li>Home</li>
           </Link>
           <Link to="/Popular" className="popular">
            <li>Popular</li>
           </Link>
           <Link to="/Gifts" className="gifts">
            <li>Gifts</li>
           </Link>
           <Link to="/Cards" className="cards">
            <li>Cards</li>
           </Link>
           <Link to="/Contactus" className="contactus">
            <li>Contact Us</li>
           </Link>
        </ul>
    
    </div>

         <AiOutlineSearch className="search" /> 

        <button className='mobile-menu-icon'
              onClick={() => setIsMobile(!isMobile)}
             >
                {isMobile ?  (
                <i className='fas fa-times'></i>
                ) : (
                <i className='fas fa-bars'></i>
                )}
            </button>

    </nav>
  )
}

export default Header
