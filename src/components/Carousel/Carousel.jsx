import React from 'react';
import './Carousel.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const Carousel = () => {
  const services = [
    {
      title: "AI Artists",
      description: "Add talent to AI",
      imageUrl: "path_to_ai_artists_image"
    },
    {
      title: "Logo Design",
      description: "Build your brand",
      imageUrl: "path_to_logo_design_image"
    },
    {
      title: "WordPress",
      description: "Customize your site",
      imageUrl: "path_to_wordpress_image"
    },
    {
      title: "Voice Over",
      description: "Share your message",
      imageUrl: "path_to_voice_over_image"
    },
    {
      title: "Video Explainer",
      description: "Engage your audience",
      imageUrl: "path_to_video_explainer_image"
    }
  ];

  return (
    
    <div className="carousel">
      <button className="carousel-btn left">&lt;</button>
      <div className="carousel-content">
       
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      <button className="carousel-btn right">&gt;</button>
    </div>
  );
};

export default Carousel;
