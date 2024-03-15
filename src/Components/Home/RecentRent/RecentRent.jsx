import React from 'react';
import './RecentRent.css';
import photo1 from '../../../assets/image/ParkLine-apartment-in-Miami-FL.jpg';

const RecentRent = () => {
    return (
      <div>
        <div className="container mx-auto rent-cards">
          <h1>Explore Rentals in Chicago,IL</h1>
          <div className="rents-container">
            <div className="rent-apartment">
              <img src={photo1} alt="" />
              <div className="rent-apartment-text">
                <h2>Presidential Towers</h2>
                <h3>555 W Madison St, Chicago, IL 60661</h3>
                <h4>Studio - 2 Beds | $1,580 - $6,385</h4>
              </div>
            </div>
            <div className="rent-apartment">
              <img src={photo1} alt="" />
              <h2>Presidential Towers</h2>
              <h3>555 W Madison St, Chicago, IL 60661</h3>
              <h4>Studio - 2 Beds | $1,580 - $6,385</h4>
            </div>
            <div className="rent-apartment">
              <img src={photo1} alt="" />
              <h2>Presidential Towers</h2>
              <h3>555 W Madison St, Chicago, IL 60661</h3>
              <h4>Studio - 2 Beds | $1,580 - $6,385</h4>
            </div>
            <div className="rent-apartment">
              <img src={photo1} alt="" />
              <h2>Presidential Towers</h2>
              <h3>555 W Madison St, Chicago, IL 60661</h3>
              <h4>Studio - 2 Beds | $1,580 - $6,385</h4>
            </div>
          </div>
          <div className="recent-button">
            <button>View More</button>
          </div>
        </div>
      </div>
    );
};

export default RecentRent;