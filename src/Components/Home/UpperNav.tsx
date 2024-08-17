import React from 'react';
import govtLogo from '../../assets/image/logo.png';

const UpperNav = () => {
    return (
      <div className=" bg-[#987D9A] text-white pb-5">
        <div className="container mx-auto ">
          <section className="flex justify-between py-3 px-4">
            <h1 className="text-[11px]">বাংলাদেশ জাতীয় তথ্য বাতায়ন</h1>
            <button className=" bg-white text-black border-none text-[11px] w-[60px] h-[25px] rounded">
              English
            </button>
          </section>
          {/* <section className="text-center bg-[#FEFBD8] py-3"> */}
          <section className="text-center bg-[#987D9A] text-white pb-3">
            <img className="mx-auto pb-3" src={govtLogo} alt="" />
            <div className="pb-2">
              <h1 className="text-2xl pb-2">তথ্য ও সম্প্রচার মন্ত্রণালয় </h1>
              <p>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
            </div>
          </section>
        </div>
      </div>
    );
};

export default UpperNav;