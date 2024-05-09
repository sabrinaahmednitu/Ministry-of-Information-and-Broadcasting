import React from 'react';
import apartmentLogo from '../../assets/image/apartment.logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-100">
      <aside>
        <div className="apartLogo">
          {' '}
          <img src={apartmentLogo} alt="" />
        </div>
        <p>
          © 2024 CoStar Group, Inc.
          <br />
          Equal Housing Opportunity
        </p>
      </aside>
      <nav>
        <h6 className="footer-title"> ADVERTISERS</h6>
        <a className="link link-hover">Add a Property</a>
        <a className="link link-hover"> Digital Feeds Program</a>
        <a className="link link-hover">Customer Portal</a>
        <a className="link link-hover"> Community Voice</a>
      </nav>
      <nav>
        <h6 className="footer-title">THE MARKETPLACE</h6>
        <a className="link link-hover">Apartamentos.com</a>
        <a className="link link-hover">Apartments Canada</a>
        <a className="link link-hover">ApartmentFinder.com</a>
        <a className="link link-hover">ForRent</a>
        <a className="link link-hover">ApartmentHomeLiving.com</a>
        <a className="link link-hover">WestsideRentals.com</a>
        <a className="link link-hover">Homes.com</a>
        <a className="link link-hover">LoopNet.com</a>
        <a className="link link-hover">Land.com</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">ABOUT US</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover"> Contact Us</a>
        <a className="link link-hover">Legal Notices</a>
        <a className="link link-hover"> Privacy Notice</a>
        <a className="link link-hover"> Equal Housing</a>
        <a className="link link-hover">Avoid Scams</a>
        <a className="link link-hover">Accessibility</a>
        <a className="link link-hover"> Rent Calculator</a>
        <a className="link link-hover">Sitemap</a>
      </nav>
    </footer>
  );
};

export default Footer;
