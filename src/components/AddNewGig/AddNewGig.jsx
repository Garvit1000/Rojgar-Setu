import React, { useState } from 'react';
import './AddNewGig.css';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

const AddNewGig = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    serviceTitle: '',
    shortDescription: '',
    deliveryTime: '',
    revisionNumber: '',
    features: [],
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, "gigs"), formData);
      alert("Gig created successfully!");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="graphics-design">Graphics & Design</option>
          <option value="video-animation">Video & Animation</option>
          <option value="writing-translation">Writing & Translation</option>
          <option value="ai-services">AI Services</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="music-audio">Music & Audio</option>
        </select>
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Service Title</label>
        <input type="text" name="serviceTitle" value={formData.serviceTitle} onChange={handleChange} />
      </div>
      <div>
        <label>Short Description</label>
        <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Delivery Time</label>
        <input type="text" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} />
      </div>
      <div>
        <label>Revision Number</label>
        <input type="number" name="revisionNumber" value={formData.revisionNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Features</label>
        <input type="text" name="features" value={formData.features} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddNewGig;
