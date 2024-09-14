import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../AuthContext/AuthContext';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useAuth(); 
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser) return;

      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          
          const defaultProfile = {
            firstName: 'New',
            lastName: 'User',
            username: `user_${currentUser.uid}`,
            email: currentUser.email,
            mobile: '',
            pronouns: '',
            college: '',
            about: '',
            skills: '',
            profilePhoto: '/default-avatar.png',
          };

          await setDoc(userDocRef, defaultProfile);
          setUserData(defaultProfile); 
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
    if (currentUser && currentUser.photoURL) {
      setProfileImage(currentUser.photoURL);
    } else {
      setProfileImage('/path/to/default-avatar.png');
    }
  }, [currentUser]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
      {profileImage && (
          <img src={profileImage} alt="Profile" className="profile-image" />
        )}
        <div className="profile-info">
          <h1>{`${userData.firstName} ${userData.lastName}`} <span>({userData.pronouns})</span></h1>
          <p>@{userData.username}</p>
          <p>{userData.college}</p>
          <Link to="/edit-profile" className="edit-profile-button">Edit Profile</Link>
        </div>
      </div>
      <div className="profile-sections">
        <div className="profile-section">
          <h2>About</h2>
          <p>{userData.about}</p>
        </div>
        <div className="profile-section">
          <h2>Skills</h2>
          <p>{userData.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
