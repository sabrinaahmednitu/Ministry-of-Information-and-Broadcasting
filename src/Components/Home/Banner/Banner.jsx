import React from 'react';
import './Banner.css';
import apartments from '../../../assets/image/appartments-banner.jpg';

const Banner = () => {
  return (
    <div>
      <div className="apartment-banner">
        <img src={apartments} alt="" />
        <div className="apartment-banner-text">
          <h1>Discover Your New Home</h1>
          <p>Helping 100 million renters find their perfect fit.</p>
          <div className="search-bar">
            <input type="text" placeholder='Search by location or point of interest' /> <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
