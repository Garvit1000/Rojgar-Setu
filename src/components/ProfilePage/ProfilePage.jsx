import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../AuthContext/AuthContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    mobile: '',
    pronouns: '',
    college: '',
    about: '',
    skills: '',
    profilePhoto: '',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser) return;

      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserProfile();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <div className="edit-profile-page">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={userData.username} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} disabled />
        </label>
        <label>
          Mobile:
          <input type="text" name="mobile" value={userData.mobile} onChange={handleChange} />
        </label>
        <label>
          Pronouns:
          <input type="text" name="pronouns" value={userData.pronouns} onChange={handleChange} />
        </label>
        <label>
          College:
          <input type="text" name="college" value={userData.college} onChange={handleChange} />
        </label>
        <label>
          About:
          <textarea name="about" value={userData.about} onChange={handleChange}></textarea>
        </label>
        <label>
          Skills:
          <textarea name="skills" value={userData.skills} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
