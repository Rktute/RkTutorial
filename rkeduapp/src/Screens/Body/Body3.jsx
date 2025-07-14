import React from 'react';
import '../Body/Body3.css';

const staff = [
  {
    name: 'Mr. Sharma',
    role: 'Principal',
    image: 'https://via.placeholder.com/150x200?text=Principal'
  },
  {
    name: 'Mrs. Verma',
    role: 'Math Teacher',
    image: 'https://via.placeholder.com/150x200?text=Math'
  },
  {
    name: 'Mr. Khan',
    role: 'Science Teacher',
    image: 'https://via.placeholder.com/150x200?text=Science'
  },
  {
    name: 'Ms. Mehta',
    role: 'English Teacher',
    image: 'https://via.placeholder.com/150x200?text=English'
  },
  {
    name: 'Mr. Gupta',
    role: 'Sports Instructor',
    image: 'https://via.placeholder.com/150x200?text=Sports'
  }
];

const Body3 = () => {
  return (
    <div className="staff-section">
      <h1 className="section-title">Your Facility Staff</h1>
      <div className="staff-grid">
        {staff.map((person, index) => (
          <div className="staff-card" key={index}>
            <img src={person.image} alt={person.name} className="staff-img" />
            <h3>{person.name}</h3>
            <p className="staff-role">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body3;
