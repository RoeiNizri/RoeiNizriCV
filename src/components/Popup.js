import React, { useState, useEffect } from 'react';
import './Popup.css'; // Ensure this matches the actual case of the filename
import popupImage from './popup.png'; // Import the image

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // Show pop-up after 30 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup} aria-label="Close Popup">
            &times;
          </button>
          <p className="popup-text">Like it? Share it!</p> {/* Add the text */}
          <img src={popupImage} alt="Popup Content" className="popup-image" /> {/* Use the imported image */}
        </div>
      </div>
    )
  );
}

export default Popup;
