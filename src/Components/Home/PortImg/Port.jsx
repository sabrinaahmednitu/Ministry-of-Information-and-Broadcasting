import React from 'react';
import './Port.css';
import photo1 from '../../../assets/simg/Rectangle 12662.png'
import photo2  from '../../../assets/simg/Rectangle 12663.png'
import photo3 from '../../../assets/simg/Rectangle 12664.png'
import photo4 from '../../../assets/simg/Rectangle 12665.png'
import photo5 from '../../../assets/simg/Rectangle 12666.png'
import photo6 from '../../../assets/simg/Rectangle 12667.png'
import photo7 from '../../../assets/simg/Rectangle 12668.png'
import photo8 from '../../../assets/simg/Group 9574.png'
import photo9 from '../../../assets/simg/Group 9596.png'

const Port = () => {
  return (
    <div>
      <div className="portfolio-container container mx-auto">
        <h1>Portfolio</h1>
        <div className="portfolio-nav"></div>
        <div className="portfolio-img">
          <div className="portfolio-img-left">
            <img src={photo9} alt="" />
            <img src={photo1} alt="" />
            <img src={photo6} alt="" />
            <div className="last-card">
              <img src={photo7} alt="" />
              <div className="last-card-text">
                <h1>Website Design</h1>
                <p>Fitness Studio Website</p>
              </div>
            </div>
          </div>
          <div className="portfolio-img-right">
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo2} alt="" />
            <img src={photo7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;
