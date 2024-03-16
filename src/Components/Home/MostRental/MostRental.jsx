import React from 'react';
import './MostRental.css';
import img1 from '../../../assets/image/widget_renting_made_simple_469.png' 

const MostRental = () => {
    return (
      <div>
        <div className="MostRental-container container mx-auto">
          <h1>The Most Rental Listings</h1>
          <p>
            Choose from over 1 million apartments, houses, condos, and townhomes
            for rent.
          </p>
          <div className="MostRental-card">
            <div >
              <h2>Renting Made Simple</h2>
              <h3>
                Browse the highest quality listings, apply online, sign your
                lease, and even pay your rent from any device.
                        </h3>
                        <h4>Find Out More</h4>
            </div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    );
};

export default MostRental;