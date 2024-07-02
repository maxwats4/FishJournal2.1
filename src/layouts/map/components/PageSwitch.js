import React, { useState } from "react";
import LocationMap from "./locationMap";
import ClickMap from "./clickMap";
import "./styles.css";
import "leaflet/dist/leaflet.css";

const PageSwitch = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const handleClick = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div>
      <button onClick={handleClick}>Switch Mode</button>
      {showComponentA ? <LocationMap /> : <ClickMap />}
    </div>
  );
};

export default PageSwitch;
