import React from 'react';
import './MostRental.css';
import img1 from '../../../assets/image/widget_renting_made_simple_469.png' 
import img2 from '../../../assets/image/home-banner-2.jpg' 

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
            <div>
              <h2>Renting Made Simple</h2>
              <h3>
                Browse the highest quality listings, apply online, sign your
                lease, and even pay your rent from any device.
              </h3>
              <h4>Find Out More</h4>
            </div>
            <img src={img1} alt="" />
          </div>
          {/* part 2 */}
          <div className="MostRental-container">
            <h1>Discover Homeownership on</h1>
            <p>
              Renting is great, but maybe you’re thinking about buying a home
              instead. We want you to find the right place. That’s why our
              sister site, Homes.com, is designed to help you find your dream
              home, even if you’re a first time buyer.
            </p>
            <div className="MostRental-card">
              <div>
                <h2>Explore Your Options</h2>
                <h3>
                  Deciding to become a homeowner is a big deal! Luckily, with
                  Homes.com, you get the most accurate homes for sale property
                  data, an agent directory, and collaboration tools to browse
                  with your agent and co-shopper to help you make the right
                  decision.
                </h3>
                <h4>Start Your Search</h4>
              </div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default MostRental;