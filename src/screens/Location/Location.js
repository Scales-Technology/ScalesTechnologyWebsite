// Map.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if the map is already initialized
    if (!mapRef.current) {
      // Initialize map
      const map = L.map('map').setView([-1.2992371249809458, 36.826696398152095], 33);

      // Add a tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add a marker at the specified coordinates
      L.marker([-1.2992371249809458, 36.826696398152095]).addTo(map);

      // Save the map instance to the ref
      mapRef.current = map;
    }
  }, []); // Run the effect only once when the component mounts

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default Map;
