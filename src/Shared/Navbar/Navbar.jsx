
import React from 'react';
import './Navbar.css';
import UpperNav from '../../Components/Home/UpperNav';
import homeLogo  from'../..//assets/home_dark.png'

const Navbar = () => {
    return (
      <div>
        <UpperNav></UpperNav>
        {/* next one  */}
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>আমাদের সম্পর্কিত </a>
                </li>
                <li>
                  <a>অধীনস্থ দপ্তর/সংস্থা</a>
                </li>
                <li>
                  <a>প্রকল্প</a>
                </li>
                <li>
                  <a>যোগাযোগ ও মতামত</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              <img src={homeLogo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>আমাদের সম্পর্কিত </a>
              </li>
              <li>
                <a>অধীনস্থ দপ্তর/সংস্থা</a>
              </li>
              <li>
                <a>প্রকল্প</a>
              </li>
              <li>
                <a>যোগাযোগ ও মতামত</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 bg-white border-green-700">
                অফিসের ধরণ
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu  rounded-box z-[1] p-2 shadow bg-white"
              >
                <li>
                  <a>মন্ত্রণালয়/বিভাগ</a>
                </li>
                <li>
                  <a>অধিদপ্তর বাতায়ন</a>
                </li>
                <li>
                  <a>বিভাগীয় বাতায়ন</a>
                </li>
                <li>
                  <a>জেলা বাতায়ন</a>
                </li>
                <li>
                  <a>উপজেলা বাতায়ন</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
