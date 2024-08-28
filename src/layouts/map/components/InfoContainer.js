import React, { useState } from "react";
import "./styles.css"; // Import your styles

const InfoContainer = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control visibility

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Toggle the visibility state
  };

  return (
    <div className="info-container">
      {isOpen && (
        <div className="info-content">
          <span className="close-icon" onClick={toggleCollapse}>
            &times;
          </span>
          <h2>How the App Works!</h2>
          <p>
            Welcome to FishEye! This app showcases various fishing locations
            with real-time weather and river conditions.
          </p>
          <p>
            Each marker on the map represents a fishing location, and you can
            click on them to view details about the location.
          </p>
          
          <h2>Have Feedback?</h2>
          <p>Click the following link to submit an improvement request.</p>
          <a href="https://forms.gle/NjNcb69YMH9tbMqbA">Feedback Form</a>
        </div>
      )}

      {!isOpen && (
        <span className="expand-icon" onClick={toggleCollapse}>
          &#43;
        </span>
      )}
    </div>
  );
};

export default InfoContainer;
