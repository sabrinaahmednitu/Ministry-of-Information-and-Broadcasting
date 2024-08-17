import React from 'react';
import link1 from '../../assets/image/e-directory.jpg';
import link2 from '../../assets/image/internal_eservice2.gif';
import link3 from '../../assets/image/National-portal_bn.gif';
import audio from '../../assets/audio/bd_national_anthem.mp3'
import facebook from '../../assets/image/facebook (3).png';
import youtube from '../../assets/image/youtube (4).png';

const ESeba = () => {
  return (
    <div className="container mx-auto w-[90%] pb-12">
      <h1 className="text-center pt-12 text-xl font-bold text-[#3f3d3f]">
        প্রয়োজনীয় ই-সেবা লিংক
      </h1>
      <hr className="mt-5" />
      <div className="link-2 flex flex-wrap justify-center max-w-[1200px] gap-5 mx-auto pt-7">
        {/*  সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS){' '} */}
        <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col border-l-4 border-[#987D9A]">
          <div className="flex items-center p-4">
            <h1 className="font-semibold  text-[#3f3d3f] text-center ">
              সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS){' '}
            </h1>
          </div>
          <div className="p-6 flex text-[14px]">
            <h1>
              {' '}
              <i class="fa-solid fa-link text-[#c198c4]"></i> সরকারি কর্মচারী
              ব্যবস্থাপনা পদ্ধতি (GEMS)
            </h1>
          </div>
        </div>
        {/* হটলাইন*/}
        <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col border-l-4 border-[#987D9A]">
          <div className="flex items-center p-4">
            <h1 className="font-semibold text-[#3f3d3f]  text-center ">
              হটলাইন
            </h1>
          </div>
          <div className="p-6 flex text-[14px]">
            <div>
              <h1 className="p-5 h-[100px] bg-[#c7b0c9] text-white text-xl">
                দুদক হটলাইন
                <br /> <span className="text-3xl ml-7">106</span>
              </h1>
            </div>
          </div>
        </div>
        {/* জাতীয় সংগীত */}
        <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col border-l-4 border-[#987D9A]">
          <div className="flex items-center p-4">
            <h1 className="font-semibold text-[#3f3d3f]  text-center">
              জাতীয় সংগীত
            </h1>
          </div>
          <div className="p-6 flex flex-col">
            <ul className="space-y-2">
              <div>
                <audio controls>
                  <source src={audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </ul>
          </div>
        </div>
        {/*  সামাজিক যোগাযোগ */}
        <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col border-l-4 border-[#987D9A]">
          <div className="flex items-center p-4">
            <h1 className="font-semibold text-[#3f3d3f] text-center">
              সামাজিক যোগাযোগ
            </h1>
          </div>
          <div className="p-6 flex gap-5">
            <img className="w-[50px] h-[50px]" src={facebook} alt="" />
            <img className="w-[50px] h-[50px]" src={youtube} alt="" />
          </div>
        </div>
        {/* কেন্দ্রীয় ই-সেবা */}
        <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col border-l-4 border-[#987D9A]">
          <div className="flex items-center p-4">
            <h1 className="font-semibold text-[#3f3d3f] text-center">
              কেন্দ্রীয় ই-সেবা
            </h1>
          </div>
        </div>
        <div className="link-1 flex flex-wrap justify-center max-w-[800px] gap-5 mx-auto ">
          <img className="w-[220px] h-[60px] " src={link1} alt="" />
          <img className="w-[220px] h-[60px]" src={link2} alt="" />
          <img className="w-[220px] h-[60px]" src={link3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ESeba;
