import React, { useState, useEffect, useCallback } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Custom Components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Test calendar
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Variables to handle location data
import waterLocations from './components/waterLocations';

// for Map 
import "./styles.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";

// Memoized MapContainer component
const MemoizedMapContainer = React.memo(MapContainer);

const suggestions = Object.values(waterLocations).map(location => location.name);

function MoveToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 10); // Adjust zoom level as needed
    }
  }, [position, map]);

  return null;
}

function InfoDashboard() {
  const [currentLocation, setCurrentLocation] = useState('');
  const [currentLat, setCurrentLat] = useState(null);
  const [currentLong, setCurrentLong] = useState(null);

  // Dashboard Variables
  const [waterTemp, setWaterTemp] = useState('Select location to view data');
  const [waterLevel, setWaterLevel] = useState('Select location to view data');
  const [waterFlow, setWaterFlow] = useState('Select location to view data');

  // Weather Variables
  const [temperature, setTemperature] = useState('Select location to view data');
  const [windSpeed, setWindSpeed] = useState('Select location to view data');
  const [cloudCoverage, setCloudCoverage] = useState('Select location to view data');
  const [weatherConditions, setWeatherConditions] = useState('Select location to view data');
  
  // Other Variables
  const [busyness] = useState('Feature Coming Soon!');
  const [news] = useState('Feature Coming Soon!');
  const [restrictions] = useState('Feature Coming Soon!');

  // Map variables
  const [marker, setMarker] = useState(null);

  // Function to fetch water flow and temperature data from USGS Water Services API
  const fetchRiverData = useCallback(async (siteCode) => {
    const baseUrl = "https://waterservices.usgs.gov/nwis/iv";
    const params = {
      format: "json",
      sites: siteCode,
      siteStatus: "all",
      parameterCd: "00060,00010,00065", // Flow and temperature parameters
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(params).toString();

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }, []);

  const loadRiverData = useCallback(async (siteCode) => {
    try {
      const data = await fetchRiverData(siteCode);

      if (data && data.value && data.value.timeSeries) {
        let updatedRiverInfo = {};

        data.value.timeSeries.forEach((series) => {
          const lat = series.sourceInfo.geoLocation.geogLocation.latitude;
          const long = series.sourceInfo.geoLocation.geogLocation.longitude;
          setCurrentLat(lat);
          setCurrentLong(long);

          switch (series.variable.variableCode[0].value) {
            case "00060":
              updatedRiverInfo.waterFlow = series.values?.[0]?.value?.[0]?.value ?? 'Data not available';
              break;
            case "00010":
              updatedRiverInfo.waterTemp = series.values?.[0]?.value?.[0]?.value ?? 'Data not available';
              break;
            case "00065":
              updatedRiverInfo.height = series.values?.[0]?.value?.[0]?.value ?? 'Data not available';
              break;
            default:
              break;
          }
        });

        setWaterLevel(updatedRiverInfo.height ?? 'Data not available');
        setWaterTemp(updatedRiverInfo.waterTemp ?? 'Data not available');
        setWaterFlow(updatedRiverInfo.waterFlow ?? 'Data not available');
      } else {
        console.log("Data not found or incomplete.");
        setWaterLevel('Data not available');
        setWaterTemp('Data not available');
        setWaterFlow('Data not available');
      }
    } catch (error) {
      console.error("Error:", error);
      setWaterLevel('Data not available');
      setWaterTemp('Data not available');
      setWaterFlow('Data not available');
    }
  }, [fetchRiverData]);

  // Function to get the weather data from OpenWeatherAPI
  const fetchWeatherData = useCallback(async (lat, lng) => {
    const apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=8003f2b648dfae7cf096951064b5a093`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCloudCoverage(data.clouds.all ?? 'Data not available');
      setTemperature(data.main.temp ?? 'Data not available');
      setWindSpeed(data.wind.speed ?? 'Data not available');
      setWeatherConditions(data.weather[0]?.description ?? 'Data not available');
    } catch (error) {
      console.error("Error:", error);
      setCloudCoverage('Data not available');
      setTemperature('Data not available');
      setWindSpeed('Data not available');
      setWeatherConditions('Data not available');
    }
  }, []);

  // Red Marker
  const customIconRed = new Icon({
    iconUrl: require("./icons/RedMarker.png"),
    iconSize: [38, 38], // size of the icon
  });

  // Function to open Google Maps with directions
  const openGoogleMaps = (lat, long) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
    window.open(googleMapsUrl, '_blank');
  };

  const copyLocation = (lat, long) => {
    const googleMapsLink = `https://www.google.com/maps?q=${lat},${long}`;
    navigator.clipboard.writeText(googleMapsLink).then(() => {
      alert('Location copied to clipboard! Share this link: ' + googleMapsLink);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const updateMarker = useCallback((lat, long) => {
    setMarker(
      {
        geocode: [lat, long],
        popUp: (
          <p>
            <button type="button" className="directions-btn" onClick={() => openGoogleMaps(lat, long)}> 
              Get Directions
            </button>
            <br />
            <button type="button" className="copy-location-btn" onClick={() => copyLocation(lat, long)}> 
              Copy to Share Location
            </button>
          </p>
        ),
        Icon: customIconRed,
      }
    );
  }, [customIconRed]);

  useEffect(() => {
    if (currentLocation) {
      const siteCode = Object.values(waterLocations).find(location => location.name === currentLocation)?.sitecode;
      if (siteCode) {
        loadRiverData(siteCode);
      }
    }
  }, [currentLocation, loadRiverData]);

  useEffect(() => {
    if (currentLat !== null && currentLong !== null) {
      fetchWeatherData(currentLat, currentLong);
      updateMarker(currentLat, currentLong); // Update marker on location change
    }
  }, [currentLat, currentLong, fetchWeatherData, updateMarker]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Search Bar with Searchable Dropdown */}
        <Box sx={{ mb: 3 }}>
          <Autocomplete
            freeSolo
            options={suggestions}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Search for water bodies..."
              />
            )}
            onInputChange={(event, newInputValue) => {
              setCurrentLocation(newInputValue);
            }}
            onChange={(event, newValue) => {
              if (newValue) {
                setCurrentLocation(newValue);
              }
            }}
            value={currentLocation}
          />
        </Box>

        {/* Main Content Containers */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <ComplexStatisticsCard
                color="primary"
                icon="water_drop"
                title="Water Temp"
                count={waterTemp === 'Select location to view data' ? waterTemp : `${waterTemp} °F`}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplexStatisticsCard
                color="success"
                icon="water_drop"
                title="Water Flow"
                count={waterFlow === 'Select location to view data' ? waterFlow : `${waterFlow} ft³/s`}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplexStatisticsCard
                color="warning"
                icon="bar_chart"
                title="Water Level"
                count={waterLevel === 'Select location to view data' ? waterLevel : `${waterLevel} ft`}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <ComplexStatisticsCard
                color="info"
                icon="cloud"
                title="Cloud Coverage"
                count={cloudCoverage === 'Select location to view data' ? cloudCoverage : `${cloudCoverage} %`}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ComplexStatisticsCard
                color="primary"
                icon="thermostat"
                title="Temperature"
                count={temperature === 'Select location to view data' ? temperature : `${temperature} °F`}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ComplexStatisticsCard
                color="info"
                icon="air"
                title="Wind Speed"
                count={windSpeed === 'Select location to view data' ? windSpeed : `${windSpeed} mph`}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <ComplexStatisticsCard
                color="warning"
                icon="cloudy"
                title="Conditions"
                count={weatherConditions}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Row Content Containers */}
        <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="secondary"
                  icon="business"
                  title="Busyness"
                  count={busyness}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="announcement"
                  title="News"
                  count={news}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="report_problem"
                  title="Restrictions"
                  count={restrictions}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
          </Grid>
        </Box>

        {/* Map */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center' }}>
          <MemoizedMapContainer
            center={currentLat !== null && currentLong !== null ? [currentLat, currentLong] : [43.615, -111.798]}
            zoom={currentLat !== null && currentLong !== null ? 12 : 7} // Adjust zoom level based on whether a location is selected
            maxZoom={18}
            scrollWheelZoom={true}
            style={{ height: '400px', width: '100%' }} // Adjust height and width as needed
          >
            <MoveToLocation position={currentLat !== null && currentLong !== null ? [currentLat, currentLong] : null} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {marker && (
              <Marker
                position={marker.geocode}
                icon={marker.Icon}
              >
                <Popup>{marker.popUp}</Popup>
              </Marker>
            )}
          </MemoizedMapContainer>
        </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default InfoDashboard;
