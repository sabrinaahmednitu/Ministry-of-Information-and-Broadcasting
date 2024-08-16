import React from 'react';
import govtLogo from '../../assets/image/logo.png'

const UpperNav = () => {
    return (
      <div className="  pb-5">
        <section className="container mx-auto flex justify-between py-3 ">
          <h1>বাংলাদেশ জাতীয় তথ্য বাতায়ন</h1>
          <button className=" bg-white border-none w-[90px] h-[35px] rounded">
            English
          </button>
        </section>
        <section className="text-center bg-[#bfebbc] py-3">
          <img className="mx-auto pb-3" src={govtLogo} alt="" />
          <div className="pb-2">
            <h1 className="text-2xl pb-2">তথ্য ও সম্প্রচার মন্ত্রণালয় </h1>
            <p>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
          </div>
        </section>
      </div>
    );
};

export default UpperNav;