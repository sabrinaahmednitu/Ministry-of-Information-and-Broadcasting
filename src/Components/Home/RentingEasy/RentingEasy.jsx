import React from 'react';
import './RentingEasy.css';
import apart4 from '../../../assets//image/apart-4.png';
import apart5 from '../../../assets//image/apart-5.png';
import apart6 from '../../../assets//image/apart-6.png';

const RentingEasy = () => {
  return (
    <div className="mt-[50px]">
      <div className="MostRental-container container mx-auto">
        <div>
          <h1>Renting Made Easy for Residents and Property Managers</h1>
          <p>
            Our articles, guides, and videos help you through the process, start
            to finish.
          </p>
          <div className="MostRental-card">
            <div className="MostRental-card-text">
              <h2>Tips for Renters</h2>
              <h3>
                Find answers to all of your renting questions with the best
                renter’s guide in the galaxy.
              </h3>
              <h4>Browse Articles</h4>
            </div>
            <div className="MostRental-card-img">
              <img src={apart4} alt="" />
            </div>
          </div>
        </div>
        {/* second part */}
        <div>
          <div className="MostRental-card">
            <div className="MostRental-card-img">
              <img src={apart5} alt="" />
            </div>
            <div className="MostRental-card-text">
              <h2>Property Manager Resources</h2>
              <h3>
                Stay up-to-date using our tips and guides on rent payments,
                leasing, management solutions, and more.
              </h3>
              <h4>Stay Informed</h4>
            </div>
          </div>
        </div>
        {/* second part */}
        {/* Third part */}
        <div>
          <div className="MostRental-card">
            <div className="MostRental-card-text">
              <h2>Take Us With You</h2>
              <h3>
                Keep Apartments.com in the palm of your hand throughout your
                rental journey.
              </h3>
            </div>
            <div className="MostRental-card-img">
              <img src={apart6} alt="" />
            </div>
          </div>
        </div>
        {/* Third part */}
        <h5 className="SearchList">
          Search over 1 million listings including apartments, houses, condos,
          and townhomes available for rent. You’ll find your next home, in any
          style you prefer.
        </h5>
      </div>
    </div>
  );
};

export default RentingEasy;
