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

// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

// Firebase 
import { database } from "../firebaseConfig"; // Adjust the import path accordingly
import { onValue, ref, set } from "firebase/database";

function Cover() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Event handler to update state on username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Event handler to update state on password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler to update state on second password input change
  const handleSecondPasswordChange = (event) => {
    setSecondPassword(event.target.value);
  };
  
  // Event handler to update state on email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler to update state on name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  
  //Functions to make sure both passwords match up
  function checkPasswords(){

    if(password == secondPassword){
      return true;
    }else{
      // add an error message if this comes back false
      return false;
    }
    
  }

  //Returns the next available UserID
  function getNextUserId() {
    return new Promise((resolve, reject) => {
      var highestKey = 0;
  
      // 1 is the user id
      onValue(ref(database, 'Journal/'), (snapshot) => {
        const data = snapshot.val();
        console.log(data);
  
        for (const key in data) {
          if (parseInt(key) >= highestKey) {
            highestKey = parseInt(key);
          }
        }
  
        var nextKey = highestKey +1;
        console.log("Next highest Key: " + nextKey);
        resolve(highestKey + 1);
      }, (error) => {
        reject(error);
      });
    });
  }


  const createNewUser = (e) => {
    e.preventDefault();
    // Gets and sets the next highest ID
    getNextUserId()
      .then((nextUserId) => {

        checkPasswords();
        //The JournalID is where the increased id number will go 
        set(ref(database, 'Journal/' + nextUserId + '/Info'), {
          username: username,
          password: password,
          name: name, 
          email: email,
          
        })
        .then(() => {
          console.log("Data submitted successfully! New User Created");
    
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });

        // Reset form fields after submission
        setUsername('');
        setPassword('');
        setSecondPassword('');
        setName('');
        setEmail('');
        })
      .catch((error) => {
        console.error("Error retrieving next journal ID:", error);
      });   
  };




  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth  onChange={handleNameChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" variant="standard" fullWidth onChange={handleEmailChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Username" variant="standard" fullWidth onChange={handleUsernameChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" variant="standard" fullWidth onChange={handlePasswordChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Re-Enter Password" variant="standard" fullWidth onChange={handleSecondPasswordChange}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={createNewUser}>
                Sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
