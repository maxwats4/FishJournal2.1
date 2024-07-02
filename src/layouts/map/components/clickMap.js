import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { Icon } from "leaflet";
import "./styles.css";

const ClickMap = () => {
  const [marker, setMarker] = useState(null);
  const [currentWeatherConditions, setCurrentWeatherConditions] =
    useState(null);
  const [cloudRating, setCloudRating] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(0);

  // Red Marker
  const customIconRed = new Icon({
    iconUrl: require("./icons/RedMarker.png"),
    iconSize: [38, 38],
  });

  //Pulls live weather data and puts it into locations
  async function fetchWeatherData(lat, lng) {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lng +
      "&units=imperial&appid=8003f2b648dfae7cf096951064b5a093";

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Additional code for updating global objects based on index
      //Wind speed need to be in miles per hour, not meters per second

      setCloudRating(data.clouds.all);
      setCurrentTemp(data.main.temp);
      setCurrentWindSpeed(data.wind.speed);
      setCurrentWeatherConditions(data.weather[0].description);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleMapClick = (e) => {
    fetchWeatherData(e.latlng.lat, e.latlng.lng);

    const newMarker = {
      geocode: [e.latlng.lat, e.latlng.lng],
      popUp: (
        <p>
          Current Weather Conditions: {currentWeatherConditions}
          <br />
          Cloud Rating: {cloudRating}%
          <br />
          Current Temp: {currentTemp} degrees
          <br />
          Current Wind: {currentWindSpeed} MpH
        </p>
      ),
      Icon: customIconRed,
    };

    setMarker(newMarker);
  };

  const MapEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <MapContainer center={[44.423176, -111.372181]} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {marker && (
        <Marker position={marker.geocode} icon={marker.Icon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      )}

      <MapEvents />
    </MapContainer>
  );
};

export default ClickMap;
