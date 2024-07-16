import React from "react";
import "./styles.css"; // Import your styles

const InfoContainer = () => {
  return (
    <div className="info-container">
      <h2>How the App Works!</h2>
      <p>
        Welcome to FishJournal! This app showcases various fishing locations
        with real-time weather and river conditions.
      </p>
      <p>
        Each marker on the map represents a fishing location, and you can click
        on them to view details about the location.
      </p>
      <h3>Is Your Location Not Here?</h3>
      <p>
        Click the "Switch Mode" button to switch to the Click-n-find map which
        allows you to click anywhere and get local river conditions. Click the "Save Location" button to save locations to be viewed on the previous map. 
      </p>
    </div>
  );
};

export default InfoContainer;
