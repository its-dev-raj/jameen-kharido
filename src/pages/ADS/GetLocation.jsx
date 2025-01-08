import React, { useState } from "react";

const GetLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState("");

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(""); // Clear previous errors
        },
        (err) => {
          setError(err.message || "Unable to retrieve location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Get Your Location</h2>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        Get Location
      </button>

      {location.latitude && location.longitude && (
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            <strong>Latitude:</strong> {location.latitude}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Longitude:</strong> {location.longitude}
          </p>
        </div>
      )}

      {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default GetLocation;
