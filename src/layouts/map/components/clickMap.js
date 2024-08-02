import React, { useState, useEffect, useContext } from "react";
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

  // Global Current User Id
  const { userID } = useContext(UserContext);

  // Map saving variables
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  // Coordinates of the click
  const [clickedCoords, setClickedCoords] = useState(null);

  // Fetch weather data when coordinates change
  useEffect(() => {
    if (clickedCoords) {
      const fetchWeatherData = async (lat, lng) => {
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

          const newMarker = {
            geocode: [lat, lng],
            popUp: (
              <div>
                <p>
                  Current Weather Conditions: {data.weather[0].description}
                  <br />
                  Cloud Rating: {data.clouds.all}%
                  <br />
                  Current Temp: {data.main.temp} degrees
                  <br />
                  Current Wind: {data.wind.speed} MpH
                </p>
                <input type="text" className="textbar-input" placeholder="Enter Location Name" />
                <br />
                <button type="button" className="submit-btn" onClick={saveLocation}>
                  Save Location
                </button>
              </div>
            ),
            Icon: customIconRed,
          };

          setMarker(newMarker);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchWeatherData(clickedCoords.lat, clickedCoords.lng);
    }
  }, [clickedCoords]);

  // Function to get the next location ID
  const getNextLocationId = () => {
    return new Promise((resolve, reject) => {
      var highestKey = 0;

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
  };

  // Function to save the location
  const saveLocation = () => {
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

        set(ref(database, 'Journal/' + userID + '/Locations/' + nextId), locationData)
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
  };

  // Red Marker
  const customIconRed = new Icon({
    iconUrl: require("./icons/RedMarker.png"),
    iconSize: [38, 38],
  });

  // Handle map click event
  const handleMapClick = (e) => {
    setClickedCoords(e.latlng);
    setLat(e.latlng.lat);
    setLong(e.latlng.lng);
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
