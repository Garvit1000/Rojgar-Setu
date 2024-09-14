import React, { useState } from 'react';
import './CategoryNav.css';

const CategoryNav = ({ setFilter }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setFilter(category);
    setActiveCategory(category);
  };

  return (
    <nav className="category-nav">
      <a 
        href="#" 
        className={activeCategory === 'graphics-design' ? 'active' : ''}
        onClick={() => handleCategoryClick('graphics-design')}
      >
        Graphics & Design
      </a>
      <a 
        href="#" 
        className={activeCategory === 'video-animation' ? 'active' : ''}
        onClick={() => handleCategoryClick('video-animation')}
      >
        Video & Animation
      </a>
      <a 
        href="#" 
        className={activeCategory === 'writing-translation' ? 'active' : ''}
        onClick={() => handleCategoryClick('writing-translation')}
      >
        Writing & Translation
      </a>
      <a 
        href="#" 
        className={activeCategory === 'ai-services' ? 'active' : ''}
        onClick={() => handleCategoryClick('ai-services')}
      >
        AI Services
      </a>
      <a 
        href="#" 
        className={activeCategory === 'digital-marketing' ? 'active' : ''}
        onClick={() => handleCategoryClick('digital-marketing')}
      >
        Digital Marketing
      </a>
      <a 
        href="#" 
        className={activeCategory === 'music-audio' ? 'active' : ''}
        onClick={() => handleCategoryClick('music-audio')}
      >
        Music & Audio
      </a>
    </nav>
  );
};

export default CategoryNav;
