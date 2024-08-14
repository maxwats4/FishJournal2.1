import React, { useState, useEffect } from 'react';

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

const suggestions = Object.values(waterLocations).map(location => location.name);

function InfoDashboard() {
  const [currentLocation, setCurrentLocation] = useState('');
  //const [currentSiteCode, setCurrentSiteCode] = useState('');
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
  
  // Other Variables - need to add the set side of it 
  const [busyness] = useState('Select location to view data');
  const [news] = useState('Select location to view data');
  const [restrictions] = useState('Select location to view data');

  // Function to fetch water flow and temperature data from USGS Water Services API
  async function fetchRiverData(siteCode) {
    const baseUrl = "https://waterservices.usgs.gov/nwis/iv";
    const params = {
      format: "json",
      sites: siteCode,
      siteStatus: "all",
      parameterCd: "00060,00010,00065", // Flow and temperature parameters
    };

    //setCurrentSiteCode(siteCode);

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
  }

  async function loadRiverData(siteCode) {
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
  }

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
  }

  useEffect(() => {
    if (currentLocation) {
      const siteCode = Object.values(waterLocations).find(location => location.name === currentLocation)?.sitecode;
      if (siteCode) {
        loadRiverData(siteCode);
      }
    }
  }, [currentLocation]);

  useEffect(() => {
    if (currentLat !== null && currentLong !== null) {
      fetchWeatherData(currentLat, currentLong);
    }
  }, [currentLat, currentLong]);

  //var today = new Date();
 // var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

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
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="info"
                  icon="thermostat"
                  title="Water Temperature"
                  count={waterTemp === 'Select location to view data' ? waterTemp : `${waterTemp}°F`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="water"
                  title="Water Gauge Level"
                  count={waterLevel === 'Select location to view data' ? waterLevel : `${waterLevel} ft`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="tune"
                  title="Water Flow"
                  count={waterFlow === 'Select location to view data' ? waterFlow : `${waterFlow} cfs`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
          </Grid>
        </Box>

        {/* Weather Information Container */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="thermostat"
                  title="Temperature"
                  count={temperature === 'Select location to view data' ? temperature : `${temperature}°F`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="info"
                  icon="air"
                  title="Wind Speed"
                  count={windSpeed === 'Select location to view data' ? windSpeed : `${windSpeed} mph`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="cloud"
                  title="Cloud Coverage"
                  count={cloudCoverage === 'Select location to view data' ? cloudCoverage : `${cloudCoverage}%`}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="calendar_today"
                  title="Weather Conditions"
                  count={weatherConditions}
                  iconStyle={{ fontSize: '24px', marginRight: '16px', marginLeft: '8px' }} // Fixed spacing
                />
              </MDBox>
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

        {/* Calendar */}
        <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2} justifyContent="center">
            {/*<InfiniteCalendar
              width={400}
              height={600}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
              layout='landscape'
            />*/}
          </Grid>
        </Box>

      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default InfoDashboard;
