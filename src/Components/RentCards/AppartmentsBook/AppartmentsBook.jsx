import React, { useState, useEffect } from 'react';

const AppartmentsBook = ({ houses }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      const mapInstance = new window.google.maps.Map(
        document.getElementById('map'),
        {
          center: { lat: 0, lng: 0 }, // default center
          zoom: 10, // default zoom level
        }
      );
      setMap(mapInstance);
    };

    // Load the Google Maps API
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    // Check if the Google Maps API is already loaded
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }
  }, []);

  // Function to add a marker for a house on the map
  const addMarker = (house) => {
    if (!map) return;
    const marker = new window.google.maps.Marker({
      position: { lat: house.latitude, lng: house.longitude },
      map: map,
      title: house.address,
    });
  };

  useEffect(() => {
    // Add markers for each house when houses change
    houses.forEach((house) => addMarker(house));
  }, [houses]);

  return (
    <div style={{ display: 'flex' }}>
      <div id="map" style={{ flex: 1, height: '500px' }}></div>
      <div style={{ flex: 1 }}>
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  );
};

const HouseCard = ({ house }) => {
  return (
    <div className="rent-apartment">
      <div className="rent-apartment-text">
        <h2>{house.name}</h2>
        <h3>{house.address}</h3>
        <h4>{house.details}</h4>
      </div>
      <div className="rent-apartment-text">
        <h2>{house.name}</h2>
        <h3>{house.address}</h3>
        <h4>{house.details}</h4>
      </div>
    </div>
  );
};

export default AppartmentsBook;
