import React, { useState } from 'react';
import "../Layout/Header.css";
import rklogo from "../../Assets/Rk.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='headerMain'>
      <div className='logo'>
        <img src={rklogo} alt="RK Logo" className='logo-img' />
      </div>

      {/* Hamburger icon */}
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      {/* Nav Links */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href='/' className='nav-link'>Home</a>
        <a href='/about' className='nav-link'>About</a>
        <a href='/contact' className='nav-link'>Contact</a>
        <a href='/blog' className='nav-link'>Blog</a>
        <a href='/service' className='nav-link'>Service</a>
        <a href='/notes' className='nav-link'>Notes</a>
        <a href='/Students' className='nav-link'>Students</a>
      </nav>

      {/* Search */}
      <div className='search-container'>
        <input type="text" placeholder="Search..." className='search-input' />
        <button className='search-btn'>🔍</button>
      </div>
    </header>
  );
};

export default Header;
