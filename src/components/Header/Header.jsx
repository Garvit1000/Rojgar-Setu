import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="hero-section">
      <h1>
        Find the perfect <span>freelance</span> services for your business
      </h1>
      <div className="features-container">
        <div className="feature-card mentorship">
          <h2>Mentorship</h2>
          <p>Get expert guidance from industry leaders</p>
        </div>
        <div className="feature-card jobs">
          <h2>Jobs</h2>
          <p>Explore the latest job opportunities in various fields</p>
        </div>
        <div className="feature-card freelancing">
          <h2>Freelancing</h2>
          <p>Find high-quality freelance gigs that match your skills</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
