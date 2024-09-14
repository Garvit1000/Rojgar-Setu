import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="service-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="service-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
