import React, { useState } from "react";
import LocationMap from "./locationMap";
import ClickMap from "./clickMap";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const PageSwitch = () => {
  const [showComponentA, setShowComponentA] = useState(true);


  // Variables for the button label changing feature
  const labelArray = ["Add Location", "Back to Map"];
  const [labelCounter, setLabelCounter] = useState(0);  // useState for labelCounter
  const [buttonLabel, setButtonLabel] = useState(labelArray[labelCounter]);

  const handleClick = () => {
    setShowComponentA(!showComponentA);

    //button label changing feature
    const newCounter = labelCounter === 0 ? 1 : 0;
    setLabelCounter(newCounter);  // Update labelCounter state
    setButtonLabel(labelArray[newCounter]);  // Set button label
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonLabel}</button>
      {showComponentA ? <LocationMap /> : <ClickMap />}
    </div>
  );
};

export default PageSwitch;
