import React from 'react';
import './PerfectPlace.css';
import apart2 from '../../../assets//image/apart-2.png'
import apart3 from '../../../assets//image/apart-3.png'

const PerfectPlace = () => {
    return (
      <div className='mt-[50px]'>
        <div className="MostRental-container container mx-auto">
          <div>
            <h1>The Perfect Place to Manage Your Property</h1>
            <p>
              Work with the best suite of property management tools on the
              market.
            </p>
            <div className="MostRental-card">
              <div className="MostRental-card-text">
                <h2>Advertise Your Rental</h2>
                <h3>
                  Connect with more than 75 million renters looking for new
                  homes using our comprehensive marketing platform.
                </h3>
                <h4>List Your Property</h4>
              </div>
              <div className="MostRental-card-img">
                <img src={apart2} alt="" />
              </div>
            </div>
          </div>
          {/* second part */}
          <div>
            <div className="MostRental-card">
              <div className="MostRental-card-img">
                <img src={apart3} alt="" />
              </div>
              <div className="MostRental-card-text">
                <h2>Lease 100% Online</h2>
                <h3>
                  Accept applications, process rent payments online, and sign
                  digital leases all powered on a single platform.
                </h3>
                <h4>Manage Your Property</h4>
              </div>
            </div>
          </div>
          {/* second part */}
          <hr className="mt-[60px]" />
        </div>
      </div>
    );
};

export default PerfectPlace;