import React from 'react';
import './Footer.css'; // Link to the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Rk Tutorial</h2>
          <p>Your trusted partner in digital solutions.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AboutUs">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email:  Rjtutorial.official@gmail.com</p>
          <p>Phone: +91 92218 59123</p>
          <p>Address: New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RK Tutorial. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
