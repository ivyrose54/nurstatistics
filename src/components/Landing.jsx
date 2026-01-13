import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import background from '../img/bglanding.png';
import '../css/landing.css';

const Landing = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleClick = () => {
    navigate('/login');  // Navigate to the login page
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div className="landing-page" style={backgroundStyle}>
      <div className="content">
        <button className="enter-button" onClick={handleClick}>
          Enter
        </button>
      </div>

      <footer>
        <p>&copy; 2024 Nurstatistics</p>
      </footer>
    </div>
  );
};

export default Landing;
