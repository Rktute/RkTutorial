import React from 'react';
import './Students.css';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

const Students = () => {
  return (
    <>
    <Header/>
     <div className="student-login-container">
      <h1 className="login-title">Student Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Enter your RK ID" />
        <input type="password" placeholder="Enter your Password" />

        <div className="login-links">
          <a href="/">Forgot RK ID?</a>
          <a href="/">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
    <Footer/>
    </>
   
  );
};

export default Students;
