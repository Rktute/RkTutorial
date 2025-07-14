import React from 'react';
import '../Quesry/Quesry.css';

const Quesry = () => {
  return (
    <div className="query-container">
      <h2>Contact Form</h2>
      <form className="query-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Quesry;
