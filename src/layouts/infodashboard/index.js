import React from 'react';

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
import Footer from "examples/Footer"

// Custom Components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// import calendar
import Calendar from './components/calendar';

// Mock Data
const suggestions = ['Lake Pend Oreille', 'Snake River', 'Bear Lake', 'Priest Lake'];



function InfoDashboard() {
  const [searchQuery, setSearchQuery] = React.useState('');

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
              setSearchQuery(newInputValue);
            }}
            onChange={(event, newValue) => {
              if (newValue) {
                setSearchQuery(newValue);
              }
            }}
            value={searchQuery}
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
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="water"
                  title="Water Level"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="tune"
                  title="Water Flow"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
          </Grid>
        </Box>

        {/* Weather Information Container */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="thermostat"
                  title="Temperature"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="info"
                  icon="air"
                  title="Wind Speed"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="cloud"
                  title="Cloud Coverage"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="calendar_today"
                  title="Weather Conditions"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
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
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="success"
                  icon="announcement"
                  title="News"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MDBox mb={3}>
                <ComplexStatisticsCard
                  color="warning"
                  icon="report_problem"
                  title="Restrictions"
                  count="Data goes here..."
                  iconStyle={{ fontSize: '24px', marginRight: '16px' }} // Ensures consistent spacing
                />
              </MDBox>
            </Grid>
          </Grid>
        </Box>

        {/* Calendar */}
        <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
          <Grid container spacing={2} justifyContent="center">
           <Calendar/>
          </Grid>
        </Box>

      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default InfoDashboard;
