import React, { useState, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { Icon } from "leaflet";
import "./styles.css";

// Imports needed for Firebase
import { ref, set, onValue } from 'firebase/database';
import { database } from "./firebaseConfig"; // Adjust the import path accordingly

// Global User Credentials from UserProvider
import { UserContext } from "layouts/authentication/UserProvider";

const ClickMap = () => {
  const [marker, setMarker] = useState(null);
  const [currentWeatherConditions, setCurrentWeatherConditions] = useState(null);
  const [cloudRating, setCloudRating] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(0);

  //Global Current User Id
  const { userID } = useContext(UserContext);

  // map saving variables
  const [lat, setLat] = useState(0); 
  const [long, setLong] = useState(0);
  

  /**
   * Returns next map ID for the user
   */
  function getNextLocationId() {
    return new Promise((resolve, reject) => {
      var highestKey = 0;

      // 1 is the user id
      onValue(ref(database, 'Journal/' + userID + '/Locations'), (snapshot) => {
        const data = snapshot.val();

        for (const key in data) {
          if (parseInt(key) >= highestKey) {
            highestKey = parseInt(key);
          }
        }

        resolve(highestKey + 1);
      }, (error) => {
        reject(error);
      });
    });
  }

  function saveLocation() {
    getNextLocationId()
      .then((nextId) => {

        const input = document.querySelector('.textbar-input');
        const inputName = input.value;
        input.value = ''; // Clear the input after submission


        const locationData = {
          Lat: lat,
          Long: long,
          LocationCloudRating: cloudRating,
          LocationName: inputName,
          LocationTemp: currentTemp,
          LocationWeatherCondition: currentWeatherConditions,
          LocationWind: currentWindSpeed,
        };

        set(ref(database, 'Journal/'+userID+'/Locations/' + nextId), locationData)
          .then(() => {
            console.log("Data submitted successfully!");
          })
          .catch((error) => {
            console.error("Error submitting data:", error);
          });
      })
      .catch((error) => {
        console.error("Error retrieving next journal ID:", error);
      });
  }

  // Red Marker
  const customIconRed = new Icon({
    iconUrl: require("./icons/RedMarker.png"),
    iconSize: [38, 38],
  });

  // Pulls live weather data and puts it into locations
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
      // Wind speed need to be in miles per hour, not meters per second

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
    setLat(e.latlng.lat);
    setLong(e.latlng.lng);

    const newMarker = {
      geocode: [e.latlng.lat, e.latlng.lng],
      popUp: (
        <div>
          <p>
            Current Weather Conditions: {currentWeatherConditions}
            <br />
            Cloud Rating: {cloudRating}%
            <br />
            Current Temp: {currentTemp} degrees
            <br />
            Current Wind: {currentWindSpeed} MpH
          </p>
          <input type="text" class="textbar-input" placeholder="Enter Location Name" />
          <br />
          <button type="button" className="submit-btn" onClick={saveLocation}>
            Save Location
          </button>
        </div>
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
