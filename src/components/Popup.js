import React, { useState, useEffect } from 'react';
import './Popup.css'; // Ensure this matches the actual case of the filename
import popupImage from '../popup.png'; // Import the image

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000); // Show pop-up after 15 seconds
  
    return () => clearTimeout(timer);
  }, []);  

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <span className="close-btn" onClick={closePopup} role="button" tabIndex="0" onKeyPress={closePopup}>&times;</span>
          <p className="popup-text">Like it? Share it!</p> {/* Add the text */}
          <img src={popupImage} alt="Popup Content" className="popup-image" /> {/* Use the imported image */}
        </div>
      </div>
    )
  );
}

export default Popup;
