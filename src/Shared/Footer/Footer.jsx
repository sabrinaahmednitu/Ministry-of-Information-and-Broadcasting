import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#bfebbc]">
      <aside>
        <div className="apartLogo">
          {' '}
          {/* <img src={apartmentLogo} alt="" /> */}
        </div>
        <p>
          সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৪ ১৪:০২:৩১
        </p>
      </aside>
      <nav>
        <h6 className="footer-title"> গোপনীয়তার-নীতিমালা</h6>
      </nav>
      <nav>
        <h6 className="footer-title">গোপনীয়তার-নীতিমালা সাইট ম্যাপ</h6>
      </nav>

      <nav>
        <h6 className="footer-title">যোগাযোগ</h6>
      </nav>
      <nav>
        <h6 className="footer-title">ব্যবহারের শর্তাবলি</h6>
      </nav>
      <nav>
        <h6 className="footer-title"> সচরাচর জিজ্ঞাস্য</h6>
      </nav>
    </footer>
  );
};

export default Footer;
