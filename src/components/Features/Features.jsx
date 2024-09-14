import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="business-solution">
      
      <main className="content">
        <div className="left-content">
          <h1>Features</h1>
          <h2>A business solution designed for <em>teams</em></h2>
          <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
          <ul>
            <li>✓ Connect to freelancers with proven business experience</li>
            <li>✓ Get matched with the perfect talent by a customer success manager</li>
            <li>✓ Manage teamwork and boost productivity with one powerful workspace</li>
          </ul>
          <button className="cta-button">Explore Business</button>
        </div>
        <div className="right-content">
          <div className="image-container">
            <img src="dan_image_url" alt="Dan" className="profile-image"/>
            <p>Looks great, I like it!<br/>@Fiona, What do you think?</p>
          </div>
          <div className="image-container">
            <img src="zac_image_url" alt="Zac" className="profile-image"/>
            <p>Can we see the logo in green?</p>
          </div>
          <div className="image-container">
            <img src="amy_image_url" alt="Amy" className="profile-image"/>
            <p>A new perspective of Shine.</p>
          </div>
          <div className="image-container">
            <img src="fiona_image_url" alt="Fiona" className="profile-image"/>
            <p>Perfect for our new campaign!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
