

// /* eslint-disable no-unused-vars */
import React from 'react';
import './Navbar.css';
import appLogo from '../../assets/image/apartment.logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        {/* next one  */}
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52"
              >
                <li>
                  <Link to="/apartments">
                    <a>Appartments For Rent</a>
                  </Link>
                </li>
                <li>
                  <a>House For Rent</a>
                </li>
                <li>
                  <a>Condos For Rent</a>
                </li>
                <li>
                  <a>Townhomes For Rent</a>
                </li>
              </ul>
            </div>
            {/* <a className="btn btn-ghost text-xl">Apartments.com</a> */}
          </div>
          <div className=" navlogo navbar-center hidden lg:flex">
            <img src={appLogo} alt="" />
            <a className="text-xl ml-2">Apartments.com</a>
          </div>
          <div className="navbar-end">
            <Link to="/signin" className="btn btn-ghost nav-signBtn">
              <h2>Sign Up / Sign In</h2>
            </Link>
            <button className="btn btn-ghost bg-base-100 text-white nav-lastBtn">
              <a>Add a Property</a>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
