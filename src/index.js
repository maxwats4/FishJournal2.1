import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

// UserProvider
import { UserProvider } from "layouts/authentication/UserProvider";

// LoadingScreen component
import LoadingScreen from "layouts/loading/LoadingScreen";


const container = document.getElementById("app");
const root = createRoot(container);

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for demonstration
  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <UserProvider>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

root.render(<Root />);
