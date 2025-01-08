import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Home from "./pages/HOME/Home";
import NotFound from "./pages/components/NotFound";
import Ads from "./pages/ADS/Ads";
import "./App.css";
import { useEffect } from "react";

function getUserLocation() {
  // Check if the browser supports Geolocation API
  if (navigator.geolocation) {
    // Use getCurrentPosition to retrieve the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);

        // You can use these coordinates (latitude, longitude) as needed
        alert(`Your location: Latitude ${latitude}, Longitude ${longitude}`);
      },
      (error) => {
        // Error callback
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      }
    );
  } else {
    // Browser doesn't support Geolocation API
    alert("Geolocation is not supported by this browser.");
  }
}

const App = () => {
  useEffect(() => {
    getUserLocation();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ads",
      element: <Ads />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />

      <Footer />
    </div>
  );
};

export default App;
