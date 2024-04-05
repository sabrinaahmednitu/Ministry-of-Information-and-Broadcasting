import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAddresses = ({ addresses }) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Set default center coordinates
    >
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
      {addresses.map((address, index) => (
        <Marker key={index} position={{ lat: address.lat, lng: address.lng }} />
      ))}
    </GoogleMap>
  );
};

export default withGoogleMap(MapWithAddresses);
