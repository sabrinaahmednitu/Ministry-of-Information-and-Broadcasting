import React from 'react';
import './Footer.css';
import helpingPartner from '../../assets/image/np-logo-set.png';
const Footer = () => {
  return (
    <section>
      <footer className="footer p-3 bg-[#987D9A] text-white">
        <aside>
          
        </aside>
        <nav>
          <h6> গোপনীয়তার-নীতিমালা</h6>
        </nav>
        <nav>
          <h6>গোপনীয়তার-নীতিমালা সাইট ম্যাপ</h6>
        </nav>

        <nav>
          <h6>যোগাযোগ</h6>
        </nav>
        <nav>
          <h6>ব্যবহারের শর্তাবলি</h6>
        </nav>
        <nav>
          <h6> সচরাচর জিজ্ঞাস্য</h6>
        </nav>
      </footer>
      {/* footer 2 */}
      <div className=" p-3 ">
        <div className="text-center text-[11px]">
          কারিগরি সহায়তায়:{' '}
          <img className="mx-auto mb-5" src={helpingPartner} alt="" />
        </div>
        <h6 className="text-center text-[14px]">
          {' '}
          পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি, ডিওআইসিটি
          ও বেসিস।
        </h6>
      </div>
      {/* footer 3 */}
      <div className=" p-3 ">
        <div className="text-center text-[11px]">
          সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৪ ১৪:০২:৩১
        </div>
      </div>
    </section>
  );
};

export default Footer;
