import { useState, useContext, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// Firebase 
import { database } from "../firebaseConfig"; // Adjust the import path accordingly
import { onValue, ref } from "firebase/database";

// Global User Credentials from UserProvider
import { UserContext } from "layouts/authentication/UserProvider";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  //Global Current User Id for rest of program 
  const { setUserID } = useContext(UserContext);

  //imputed Username and password variables
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // array of all users id, username, and password
  const [userCredentials, setUserCredentials] = useState([]);

  // state for error message
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // gets all user's id, username, password from Firebase and puts it into a usersArray
    onValue(ref(database, 'Journal/'), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const users = Object.entries(data).map(([userID, userData]) => {
          if (userData.Info && userData.Info.username && userData.Info.password) {
            return {
              userID,
              username: userData.Info.username,
              password: userData.Info.password,
            };
          }
          return null;
        }).filter(user => user !== null);

        setUserCredentials(users);
        console.log("user array successfully loaded");
      }
    });
  }, []);

  // Event handler to update state on username input change
  const handleUsernameChange = (event) => {
    setInputUsername(event.target.value);
  };

  // Event handler to update state on password input change
  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  // checks inputed credentials against known users, if authentication is correct, then global userID is updated
  const checkCredentials = () => {
    const user = userCredentials.find(
      (user) => user.username === inputUsername && user.password === inputPassword
    );

    if (user) {
      console.log("Validated:", user.userID);
      setUserID(user.userID);
      navigate('/Map');
    } else {
      setErrorMessage("Username and password do not match");
    }
  };

  // Event handler for the sign-in button click
  const handleSignIn = () => {
    console.log('Username:', inputUsername);
    console.log('Password:', inputPassword);
    console.log(userCredentials);
    checkCredentials();
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            {/* {<Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>} */}
            {/* {<Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>} */}
            {/* {<Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>} */}
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Username" fullWidth value={inputUsername} onChange={handleUsernameChange} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth value={inputPassword} onChange={handlePasswordChange} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            {errorMessage && (
              <MDBox mt={2}>
                <MDTypography variant="caption" color="error">
                  {errorMessage}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
