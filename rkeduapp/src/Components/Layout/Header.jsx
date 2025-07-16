import React from 'react';
import "../Layout/Header.css";
import rklogo from "../../Assets/Rk.jpeg";

const Header = () => {
  return (
    <header className='headerMain'>
      <div className='logo'>
        <img src={rklogo} alt="RK Logo" className='logo-img' />
      </div>

      <nav className='nav'>
        <a href='/' className='nav-link'>Home</a>
        <a href='/AboutUs' className='nav-link'>About</a>
        <a href='/contact' className='nav-link'>Contact</a>
        <a href='/blog' className='nav-link'>Blog</a>
        <a href='/service' className='nav-link'>Service</a>
        <a href='/notes' className='nav-link'>Notes</a>
      </nav>

      <div className='search-container'>
        <input type="text" placeholder="Search..." className='search-input' />
        <button className='search-btn'>🔍</button>
      </div>
    </header>
  );
};

export default Header;
