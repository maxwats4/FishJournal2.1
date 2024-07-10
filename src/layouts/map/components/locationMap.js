import "./styles.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import React, { useEffect, useState } from "react";
import {Location} from "./Location";
import { database } from "./firebaseConfig"; // Adjust the import path accordingly
import { onValue, ref, query, orderByChild, equalTo, get, remove } from "firebase/database";



//To Do: Make the map flexible depending on the size of the screen.


// Red Marker
const customIconRed = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/RedMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// Green Marker
const customIconGreen = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/GreenMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// Orange Marker
const customIconOrange = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/OrangeMarker.png"),
  iconSize: [38, 38], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const LocationMap = () => {
  const [loading, setLoading] = useState(true);
  const [updatedMarkers, setUpdatedMarkers] = useState([]);
  const userId = 123456;


// problem: for some reason when the map rerenders after deleting the location, the UpdatedMarkers is empty causing it to crash. 
// it might not be the updatedMarkers array becasue the array is empty in the beginning too. 

  const deleteLocation = async (lat, long) => {

    const refreshPage = () => {
      window.location.reload();
    };

    try {
      const locationsRef = ref(database, `Journal/${userId}/Locations/`);
      const latQuery = query(locationsRef, orderByChild('Lat'), equalTo(lat));
      const snapshot = await get(latQuery);
  
      // deletes location from the db. 
      if (snapshot.exists()) {
        console.log("Updated marker: ");
        console.log(updatedMarkers);
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val().Long === long) {
            const locationRef = ref(database, `Journal/${userId}/Locations/${childSnapshot.key}`);
            remove(locationRef)
              .then(() => {
                console.log('Location deleted successfully');
                refreshPage();
              })
              .catch((error) => {
                console.error('Error deleting location:', error);
              });
          }
        });

        // made add some code to rerender and redisplay the markers
      } else {
        console.log('No matching location found');
      }
    } catch (error) {
      console.error('Error retrieving location:', error);
    }
  };
  

  /**
   * Code for fetching and updating map with DB locations
   */
  const locationList = [new Location(
    "Base Location",
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  )];

  const fetchDataAndUpdate = async () => {
    try {
      const locationsRef = ref(database, `Journal/${userId}/Locations/`);
      onValue(locationsRef, (snapshot) => {
        const data = snapshot.val();
        console.log("data: ");
        console.log(data);

        if (data) {
          const locationsArray = Object.values(data).map((location) => {
            return new Location(
              location.LocationName,
              location.Lat,
              location.Long,
              0,
              0,
              0,
              location.LocationTemp,
              location.LocationCloudRating,
              location.LocationWeatherCondition,
              location.LocationWind
            );
          });

          locationList.push(...locationsArray);

          // Update weather for each location
          const weatherPromises = locationList.map((location, index) =>
            updateLocationWeather(index, location)
          );

          Promise.all(weatherPromises).then((updatedLocations) => {
            const markers = updatedLocations.map((location) => ({
              geocode: [location.getLatitude(), location.getLongitude()],
              popUp: (
                <p>
                  Location: {location.getName()}
                  <br />
                  Current Weather Conditions:{" "}
                  {location.getLocationWeatherConditions()}
                  <br />
                  Cloud Rating: {location.getLocationCloudRating()}%
                  <br />
                  Current Temp: {location.getLocationTemp()} degrees
                  <br />
                  Current Wind: {location.getLocationWind()} MpH
                  <button type="button" className="delete-btn" onClick={() => deleteLocation(location.getLatitude(), location.getLongitude())}> 
                   Delete Location
                  </button>
                </p>
              ),
              Icon: customIconRed,
            }));

            // code for the delete button to call the delete function onClick={() => deleteLocation(location.getLatitude(), location.getLongitude())}
            setUpdatedMarkers(markers);

            console.log("Updated marker before deletion: ");
            console.log(updatedMarkers);
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };
  

  useEffect(() => {
  
    fetchDataAndUpdate();
  }, []);

  const updateLocationWeather = (index, location) => {
    return new Promise((resolve, reject) => {
      const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.getLatitude()}&lon=${location.getLongitude()}&units=imperial&appid=8003f2b648dfae7cf096951064b5a093`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          
          return response.json();
        })
        .then((data) => {
          location.setLocationCloudRating(data.clouds.all);
          location.setLocationTemp(data.main.temp);
          location.setLocationWind(data.wind.speed);
          location.setLocationWeatherConditions(data.weather[0].description);
          resolve(location);
        })
        .catch((error) => {
          console.error("Error:", error);
          reject(error);
        });
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map-container">
      <MapContainer center={[44.423176, -111.372181]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {updatedMarkers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={marker.Icon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default LocationMap;