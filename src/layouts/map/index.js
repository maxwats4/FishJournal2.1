/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
//import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import InfoContainer from "./components/InfoContainer";

import React from "react";

import PageSwitch from "./components/PageSwitch";



// react-bootstrap components
import { Container } from "react-bootstrap";

function Map() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <InfoContainer />
      <MDBox pt={6} pb={3}>
        <Container>
          <PageSwitch />
        </Container>
        
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Map;
