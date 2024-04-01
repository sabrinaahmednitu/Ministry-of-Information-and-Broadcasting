import React from 'react';

const AddressCard = ({ address }) => {
  return (
    <div className="address-card">
      <h2>{address.name}</h2>
      <p>{address.street}</p>
      {/* <p>
        {address.city}, {address.state} {address.zip}
      </p> */}
    </div>
  );
};

export default AddressCard;
