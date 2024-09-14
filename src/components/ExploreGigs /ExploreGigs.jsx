import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './ExploreGigs.css';
import CategoryNav from '../CategoryNav/CategoryNav'; 

const ExploreGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchGigs = async () => {
      const querySnapshot = await getDocs(collection(db, 'gigs'));
      const gigsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setGigs(gigsData);
      setFilteredGigs(gigsData); 
    };
    fetchGigs();
  }, []);

  useEffect(() => {
    if (filter === '') {
      setFilteredGigs(gigs); 
    } else {
      const filtered = gigs.filter((gig) => gig.category === filter);
      setFilteredGigs(filtered); 
    }
  }, [filter, gigs]);

  return (
    <>
      <h2>Explore Gigs</h2>
      <CategoryNav setFilter={setFilter} /> 
      <div className="gigs-container" id="gigs">
        {filteredGigs.map((gig) => (
          <div key={gig.id} className="gig-card">
            <h3>{gig.title}</h3>
            <p><strong>Category:</strong> {gig.category}</p>
            <p><strong>Service Title:</strong> {gig.serviceTitle}</p>
            <p><strong>Short Description:</strong> {gig.shortDescription}</p>
            <p><strong>Delivery Time:</strong> {gig.deliveryTime}</p>
            <p><strong>Revision Number:</strong> {gig.revisionNumber}</p>
            <p><strong>Price:</strong> ${gig.price}</p>
            <button className="view-gig-btn">View Gig</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExploreGigs;
