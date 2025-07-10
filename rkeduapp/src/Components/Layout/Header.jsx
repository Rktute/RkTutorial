import React from 'react'
import "../Layout/Header.css";
import rklogo from "../../Assets/Rk.jpeg"
const Header = () => {
  return (
    <>
      <header className='headerMain'>
        <div className='logo'>
          <img src={rklogo} alt="" className='logo img ' />
        </div>
        <nav className='nav'>
          <a href='/' className='nav-link'>Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </header>
    </>
  )
}

export default Header
