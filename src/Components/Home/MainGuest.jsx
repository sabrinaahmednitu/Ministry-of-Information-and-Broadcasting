import React from 'react';
import yunus from '../../assets/image/Dr. Muhammad Yunus.jpg' 
import secretary from '../../assets/image//secretary.jpg'; 

const MainGuest = () => {
    return (
      <div className="bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto w-[80%] flex flex-col md:flex-row justify-between gap-8 py-8 ">
          {/* Notice Section */}
          <div className="w-full md:w-3/5 bg-white shadow-xl rounded-lg p-6">
            <h1 className="font-semibold text-gray-800 mb-4">নোটিশ বোর্ড</h1>
            <ul className="space-y-3">
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <a href="#" className=" hover:underline text-[14px]">
                  জি.ও.নং-১৬০২/১(৮) (প্রজ্ঞাপন: বহিঃ বাংলাদেশ ছুটি) (নতুন)
                </a>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <a href="#" className="hover:underline text-[14px]">
                  জি.ও.নং-৩৩২ (শোকবার্তা) (নতুন)
                </a>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <a href="#" className="hover:underline text-[14px]">
                  জি.ও.নং-৩৩০(৮) (প্রজ্ঞাপন) কর্মকর্তাগণের বদলি/পদায়ন। (নতুন)
                </a>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <a href="#" className=" hover:underline text-[14px]">
                  জি.ও.নং-২৩৭ (অফিস আদেশ: নিজ দপ্তরে যোগদানের নির্দেশনা প্রদান)
                </a>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <a href="#" className=" hover:underline text-[14px]">
                  জি.ও.নং-৩২২(৫) (প্রজ্ঞাপন) চাকরি স্থায়ীকরণ সংক্রান্ত।
                </a>
              </li>
            </ul>
          </div>

          {/* Guest Cards Section */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-2/5">
            <div className="guestCard flex flex-col w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <h1 className="bg-[#ddcad7] text-white text-center  font-semibold p-4">
                মাননীয় প্রধান উপদেষ্টা
              </h1>
              <div className="p-6 flex-grow">
                <img
                  className="w-[100px] md:w-[150px] mx-auto rounded-full border-4 border-[#BB9AB1] shadow-md"
                  src={yunus}
                  alt="Dr. Muhammad Yunus"
                />
                <div className="text-center mt-4">
                  <h2 className="font-bold text-gray-800">ড. মুহাম্মদ ইউনূস</h2>
                  <h3 className=" text-gray-600">মাননীয় প্রধান উপদেষ্টা</h3>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-[#BB9AB1] text-white py-2  rounded-full focus:outline-none">
                  বিস্তারিত
                </button>
              </div>
            </div>

            <div className="guestCard flex flex-col w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105">
              <h1 className="bg-[#ddcad7] text-white text-center  font-semibold p-4">
                সিনিয়র সচিব
              </h1>
              <div className="p-6 flex-grow">
                <img
                  className="w-[100px] md:w-[150px] mx-auto rounded-full border-4 border-[#BB9AB1] shadow-md"
                  src={secretary}
                  alt="Md. Humayun Kabir Khondaker"
                />
                <div className="text-center mt-4">
                  <h2 className=" font-bold text-gray-800">
                    মোঃ হুমায়ুন কবীর খোন্দকার
                  </h2>
                  <h3 className=" text-gray-600">
                    সিনিয়র সচিব, তথ্য ও সম্প্রচার...
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-[#BB9AB1] text-white py-2  rounded-full focus:outline-none">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MainGuest;