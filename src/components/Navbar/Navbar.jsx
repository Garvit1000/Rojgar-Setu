import React, { useState, useEffect } from 'react';
import { auth, signOut } from '../../firebase';
import { useAuth } from '../AuthContext/AuthContext';
import SignUpModal from './SignUpModal';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo, { assets } from '../../assets/assets';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menu, setMenu] = useState("home");
  const { currentUser } = useAuth();

  
  useEffect(() => {
    if (currentUser && !currentUser.photoURL) {
      
      currentUser.photoURL = ''; 
    }
  }, [currentUser]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <header className="header">
      <Link to='/'><img src={assets.logo} alt="RojGar SeTu" className="logo" /></Link>
      <nav className="nav-links">
        <a href="#gigs" onClick={() => setMenu("gigs")} className={menu === "gigs" ? "active" : ""}> Explore Gigs</a>
        <a href='#mentorship' onClick={() => setMenu("mentorship")} className={menu === "events" ? "active" : ""}>Mentorship</a>
        <a href="/jobs">Jobs</a>
        <a href="#">Internships</a>
        <a href="/resume-editor">Resume Builder</a>
        {currentUser ? (
          <div className="profile-link">
            <img
              src={currentUser.photoURL || '/path_to_default_avatar_image'} // Display default image if no photoURL
              alt="Profile"
              onClick={toggleDropdown}
              className="profile-pic"
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to='/add-gigs'>My Gigs</Link>
                <a href="#">Job application</a>
                <a href="#">Internships</a>
                <Link to='/profile'>Profile</Link>
              </div>
            )}
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <button onClick={openModal} className="sign-up-btn">Sign Up</button>
        )}
      </nav>
      {isModalOpen && <SignUpModal closeModal={closeModal} />}
    </header>
  );
};

export default Navbar;
