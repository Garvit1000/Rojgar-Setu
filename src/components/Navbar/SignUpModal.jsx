import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../../firebase';
import './SignUpModal.css';

const SignUpModal = ({ closeModal }) => {
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
      closeModal(); 
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
      console.error("Google sign-in error: ", error);
    }
  };

  const handleEmailSignIn = async () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    
    if (!email || !password) {
      setError("Please provide both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in with email");
      closeModal(); 
    } catch (error) {
      setError("Email sign-in failed. Please try again.");
      console.error("Email sign-in error: ", error);
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>×</button>
        <div className="modal-body">
          <div className="left-side">
            <h2>Success starts here</h2>
            <ul>
              <li>✓ Over 700 categories</li>
              <li>✓ Quality work done faster</li>
              <li>✓ Access to talent and businesses across the globe</li>
            </ul>
            
          </div>
          <div className="right-side">
            <h2>Sign in to your account</h2>
            <p>Don’t have an account? <a href="#">Join here</a></p>
            {error && <p className="error-message">{error}</p>} 
            <button className="google-btn" onClick={handleGoogleSignIn}>Continue with Google</button>
            <button className="email-btn" onClick={handleEmailSignIn}>Continue with email/username</button>
            <div className="or-separator">OR</div>
            <button className="github-btn">Continue with GitHub</button>
            <button className="facebook-btn">Continue with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
